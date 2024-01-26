import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

// matcher terbagi 2 category routes
// auth routes, berisi kumpulan route yang tidak perlu login
// protected routes, berisi kumpulan route yang perlu login
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    // guest only routes must be equal with guest only routes in auth.config.ts
    "/login",
    "/sign-out",

    // protected routes
    "/dashboard/:path*",
  ],
};
