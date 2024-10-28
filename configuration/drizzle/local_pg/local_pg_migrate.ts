import dotenv from 'dotenv';
dotenv.config();
import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import postgres from 'postgres';

const migratetionClient = postgres({
    host: process.env.LOCAL_PG_HOST!,
    port: parseInt(process.env.LOCAL_PG_PORT!),
    user: process.env.LOCAL_PG_USER!,
    password: process.env.LOCAL_PG_PASS!,
    database: process.env.LOCAL_PG_NAME!,
  });

async function main() {
    await migrate(drizzle(migratetionClient), {
        migrationsFolder: "./configuration/drizzle/migrations/local_pg/"
    })

    await migratetionClient.end();
}

main()