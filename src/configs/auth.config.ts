import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import { envServer } from "./env-server.config";

const loginPageRoute = "/auth/sign-in";

const guestOnlyPageConfig = {
  // list of guest only routes
  routes: [loginPageRoute, "/auth/sign-out"],
  // if user try to access guest only routes when authenticated,
  // redirect to this page
  fallback: "/dashboard",
};

export const authConfig = {
  pages: {
    signIn: loginPageRoute,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // if logged in allow
      if (isLoggedIn) {
        // prevent on login page
        const fallback = guestOnlyPageConfig.routes.some(
          (route) =>
            nextUrl.pathname.startsWith(route) &&
            nextUrl.pathname !== guestOnlyPageConfig.fallback,
        );

        if (fallback)
          return Response.redirect(
            new URL(guestOnlyPageConfig.fallback, nextUrl),
          );
        return true;
      }
      // else redirect to login page
      else return false;
    },
  },
  providers: [
    Google({
      clientId: envServer.GOOGLE_CLIENT_ID,
      clientSecret: envServer.GOOGLE_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
