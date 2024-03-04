import { envServer } from "@/configs/env-server.config";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  pages: {
    signIn: "/auth/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: envServer.NEXTAUTH_GOOGLE_ID,
      clientSecret: envServer.NEXTAUTH_GOOGLE_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
