"use client";

import { Button } from "antd";
import { signOut, useSession } from "next-auth/react";

const DashboardPage = () => {
  const session = useSession();
  return (
    <>
      <Button type="primary" onClick={() => signOut()}>
        Sign Out
      </Button>
      <div>Name: {session?.data?.user?.name}</div>
    </>
  );
};

export default DashboardPage;
