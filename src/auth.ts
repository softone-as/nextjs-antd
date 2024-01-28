import NextAuth from "next-auth";
import { authConfig } from "./configs/auth.config";

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
