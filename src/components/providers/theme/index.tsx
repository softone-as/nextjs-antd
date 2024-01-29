"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React from "react";

const AntConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ConfigProvider>
    <AntdRegistry>{children}</AntdRegistry>
  </ConfigProvider>
);

export default AntConfigProvider;
