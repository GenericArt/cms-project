import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  schema: './configuration/drizzle/local_sqlite/local_lite_schema.ts',
  out: './configuration/drizzle/migrations/local_sqlite/',
  dialect: 'sqlite',
  dbCredentials: {
    url: './local_sqlite.db',
  },
  verbose: true,
  strict: true,
});
