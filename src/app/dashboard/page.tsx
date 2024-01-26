"use client";

import MainLayout from "@/components/layouts/main";
import { Button } from "antd";
import { signOut, useSession } from "next-auth/react";

const DashboardPage = () => {
  const session = useSession();
  return (
    <MainLayout>
      <Button type="primary" onClick={() => signOut()}>
        Sign Out
      </Button>
      <div>Name: {session?.data?.user?.name}</div>
    </MainLayout>
  );
};

export default DashboardPage;
