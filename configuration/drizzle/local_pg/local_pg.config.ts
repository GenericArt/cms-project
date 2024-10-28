import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  schema: './configuration/drizzle/local_pg/local_pg_schema.ts',
  out: './configuration/drizzle/migrations/local_pg/',
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.LOCAL_PG_HOST!,
    port: parseInt(process.env.LOCAL_PG_PORT!),
    user: process.env.LOCAL_PG_USER!,
    password: process.env.LOCAL_PG_PASS!,
    database: process.env.LOCAL_PG_NAME!,
    // ssl: true,
  },
  verbose: true,
  strict: true,
});
