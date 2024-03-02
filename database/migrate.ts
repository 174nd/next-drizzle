import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "@/database";

async function main() {
  await migrate(db, { migrationsFolder: "./database/migrations" });
}

main();