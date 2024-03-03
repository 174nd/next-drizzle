import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/auth";
import { redirect, useRouter } from "next/navigation";

export async function middleware(request: NextRequest) {
  // return await updateSession(request);
  const respose = await updateSession(request);
  // if(request.nextUrl.pathname !== '/' && respose == undefined) return redirect('/');
  
  // const url = request.nextUrl.clone()   
  // if(url.pathname !== '/' && respose == undefined){
  //   url.pathname = '/'
  //   return NextResponse.redirect(url)   
  // }
  // return redirect('/');
  return respose;
}