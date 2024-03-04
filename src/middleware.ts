import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const guestOnlyPage = ["/auth/sign-in", "/auth/sign-up"];

export default withAuth(
  function (req) {
    return;
  },
  {
    // Callback for checking authorization token
    callbacks: {
      authorized: ({ token }) => {
        return token;
      },
    },
  },
);

export const config = {
  // https://next-auth.js.org/configuration/nextjs#middleware
  matcher: ["/dashboard"],
};
