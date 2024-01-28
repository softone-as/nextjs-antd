"use client";

import { Button } from "antd";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const LoginPage = () => {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <div>
      <Button
        type="primary"
        onClick={() =>
          signIn("google", callbackUrl ? { callbackUrl } : undefined)
        }
      >
        Sign in
      </Button>
    </div>
  );
};

export default LoginPage;
