import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const guestOnlyPage = ["/auth/sign-in", "/auth/sign-up"];

export default withAuth(
  function (req) {
    return NextResponse.next();
  },
  {
    // Callback for checking authorization token
    callbacks: {
      authorized: async ({ token }) => {
        return !!token;
      },
    },
  },
);

export const config = {
  // https://next-auth.js.org/configuration/nextjs#middleware
  matcher: ["/dashboard"],
};
