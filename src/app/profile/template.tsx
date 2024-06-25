"use client";

import MainLayout from "@/components/layouts/main";
import { Card, Space } from "antd";

const ProfileTemplatePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout>
      <Card title="Profile">
        <Space direction="vertical" style={{ width: "100%" }}>
          {children}
        </Space>
      </Card>
    </MainLayout>
  );
};

export default ProfileTemplatePage;
