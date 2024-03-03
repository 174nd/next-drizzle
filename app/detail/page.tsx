import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Detail() {
  const session = await getSession();
  if(session == undefined) redirect("/");
  delete session.user.password;
  return (
    <section>
      <div>Detail</div>
      
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  )
}
