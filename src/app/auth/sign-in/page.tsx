"use client";

import { Button } from "antd";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams, redirect } from "next/navigation";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const session = useSession();

  const callbackUrl = searchParams.get("callbackUrl");

  if (session.status === "authenticated") {
    return redirect(callbackUrl || "/dashboard");
  }

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
