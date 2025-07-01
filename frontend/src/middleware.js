import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  if (token) console.log("Token email:", token.email);

  const isProtected = req.nextUrl.pathname.startsWith("/admin");

  if (isProtected) {
    if (!token || token.email !== "minhajap00@gmail.com") {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};