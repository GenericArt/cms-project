import { RoleType } from '../../constants/roles';
import { PermissionType } from '../../constants/permissions';
import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  boolean,
  integer,
  jsonb,
  real,
  uuid,
} from "drizzle-orm/pg-core";

export const UsersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  active: boolean("active").default(true),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  roles: text("roles").array().$type<RoleType[]>().default([]),
  permissions: text("permissions")
    .array()
    .$type<PermissionType[]>()
    .default([]),
  is_staff: boolean("is_staff").default(false),
  is_admin: boolean("is_admin").default(false),
  password: varchar("password").notNull(),
  refresh_token_list: jsonb("refresh_token_list").array().default([]),
  max_concurrent_tokens: integer("max_concurrent_tokens").default(10),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
