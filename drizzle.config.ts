import "@/database/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./database/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL! + "?sslmode=require",
  },
  verbose: true,
  strict: true,
});