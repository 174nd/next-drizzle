import "@/database/config";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!)
export const db = drizzle(sql, { schema });