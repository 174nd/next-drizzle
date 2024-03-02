import { db } from "@/database";
import { users } from "@/database/schema";

export default async function Home() {
  const data = await db.select().from(users);
  const data2 = await db.query.users.findMany();

  return (
    <div>
      <div>sql-like: {JSON.stringify(data)}</div>
      <div>relational: {JSON.stringify(data2)}</div>
    </div>
  );
}