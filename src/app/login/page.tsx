"use client";

import { Button } from "antd";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <Button type="primary" onClick={() => signIn("google")}>
        Sign in
      </Button>
    </div>
  );
};

export default LoginPage;
