import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as local_pg_schema from "../configuration/drizzle/local_pg/local_pg_schema";
import dotenv from "dotenv";
dotenv.config();

const local_pg = new Pool({
  host: process.env.LOCAL_PG_HOST!,
  port: parseInt(process.env.LOCAL_PG_PORT!),
  user: process.env.LOCAL_PG_USER!,
  password: process.env.LOCAL_PG_PASS!,
  database: process.env.LOCAL_PG_NAME!,
});

export const db_local_pg = drizzle(local_pg, { schema: local_pg_schema });