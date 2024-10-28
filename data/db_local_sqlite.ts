import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as local_sqlite_schema from "../configuration/drizzle/local_sqlite/local_lite_schema";

const local_sqlite_db = new Database('local_sqlite.db');

export const db_local_sqlite = drizzle( local_sqlite_db, { schema: local_sqlite_schema});
