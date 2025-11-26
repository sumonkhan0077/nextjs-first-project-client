import { NextResponse } from "next/server";
import admin from "./lib/firebaseAdmin";

export async function proxy(request) {
  // Cookie থেকে token নাও
  const token = request.cookies.get("token")?.value;

//   if (!token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   try {
//     await admin.auth().verifyIdToken(token);
//     return NextResponse.next();
//   } catch {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
}

export const config = {
  matcher: [
    "/manage_products/:path*",
    "/add_products/:path*",
    "/products/:id([a-f0-9]{24})",
  ],
};
