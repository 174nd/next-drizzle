import { db } from '@/database';
import { users } from '@/database/schema';
import { generateSession } from '@/lib/auth';
import { and, eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import React from 'react'

export default function Login() {
  return (
    <form action={async (formData) => {
      "use server";

      const email = formData.get("email");
      const password = formData.get("password");
      const data = await db.query.users.findFirst({
        where: and(eq(users.email, email as string), eq(users.password, password as string)),
      });

      if(data == undefined) return;
      await generateSession(data);
      redirect("/detail");
    }}>
      
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  )
}
