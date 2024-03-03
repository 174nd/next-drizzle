import { db } from "@/database";
import { users } from "@/database/schema";

async function main() {
	try {
  console.log("Seeding database");
  await db.delete(users);

  await db.insert(users).values({
    email    : "admin@admin.com",
    password : "admin",
    image    : "some image url",
    name     : "admin",
  });

  
  console.log("insert user success");
  process.exit();
	} catch (error) {
		console.error(error);
		throw new Error("Failed to seed database");
	}

}

main();