"use client";

import { SessionProvider as SessionProviderPrimitive } from "next-auth/react";

const SessionProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <SessionProviderPrimitive>{children}</SessionProviderPrimitive>;
};

export default SessionProvider;
