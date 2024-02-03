"use client";

import { SWRConfig } from "swr";

const SWRConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <SWRConfig>{children}</SWRConfig>;
};

export default SWRConfigProvider;
