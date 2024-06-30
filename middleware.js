import { getSession } from "@/app/lib/utils";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const session = await getSession(req.cookies);
  if (session.signedIn) {
    if (req.nextUrl.pathname == "/") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  } else {
    if (req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}