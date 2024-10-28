import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

const db = new Database('local_sqlite.db');

async function main() {
    await migrate(drizzle(db), {
        migrationsFolder: "./configuration/drizzle/migrations/local_sqlite/"
    });

    db.close();
}

main().catch(console.error);