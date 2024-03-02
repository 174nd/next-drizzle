import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "@/database";

async function main() {
  await migrate(db, { migrationsFolder: "./database/migrations" });
  process.exit(0);
}

main();