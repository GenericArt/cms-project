import express from 'express';

import { Roles } from './configuration/constants/roles';
import { Permissions } from './configuration/constants/permissions';
import { UsersTable } from './configuration/drizzle/local_pg/local_pg_schema';
import { UsersTable as UsersTableSqlite } from './configuration/drizzle/local_sqlite/local_lite_schema';
import { db_local_pg } from './data/db_local_pg';
import { db_local_sqlite } from './data/db_local_sqlite';

export default function () {
  const app = express();

  app.use(express.json());

  app.get('/temp', async (req: any, res: any) => {
    const user = {
      name: 'Manley Gage',
      email: 'manley2@me.com',
      password: 'foobar',
    };

    async function createUserPg(user: any) {
      const newUser = await db_local_pg
        .insert(UsersTable)
        .values({
          name: user.name,
          email: user.email,
          permissions: [Permissions.VIEW_REPORTS],
          roles: [Roles.ADMIN],
          password: user.password,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .returning({
          id: UsersTable.id,
          name: UsersTable.name,
          email: UsersTable.email,
          permissions: UsersTable.permissions,
          hashed_password: UsersTable.password,
          createdAt: UsersTable.createdAt,
          updatedAt: UsersTable.updatedAt,
        });

      console.log(newUser);
      console.log('Foo');

      return newUser;
    }


    async function createUserSqlite(user: any) {
        const now = new Date().toISOString();

        const newUser = await db_local_sqlite
          .insert(UsersTableSqlite)
          .values({
            name: user.name,
            email: user.email,
            permissions: [Permissions.VIEW_REPORTS],
            roles: [Roles.ADMIN],
            password: user.password,
            created_at: now,
            updated_at: now,
          })
          .returning({
            id: UsersTableSqlite.id,
            name: UsersTableSqlite.name,
            email: UsersTableSqlite.email,
            permissions: UsersTableSqlite.permissions,
            hashed_password: UsersTableSqlite.password,
            created_at: UsersTableSqlite.created_at,
            updated_at: UsersTableSqlite.updated_at,
          });
  
        console.log(newUser);
        console.log('Foo');
  
        return newUser;
      }

    // const new_user = createUserPg(user);
    const new_user = createUserSqlite(user);

    if (!new_user){
        return res.status(500).send({ message: "error" });
    } else {
        return res.status(200).send({ message: new_user });
    }

  });

  return app;
}
