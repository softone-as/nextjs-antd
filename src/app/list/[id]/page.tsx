"use client";

import { notFound, useRouter } from "next/navigation";

import { NextPage } from "next";
import { useMemo } from "react";
import useSWR from "swr";
import { listDummy } from "../actions";
import { Button, Card } from "antd";

type TDetailPage = NextPage & {
  params: {
    id: number;
  };
};

const Detail: React.FC<TDetailPage> = (props) => {
  const { data: dummy } = useSWR(["/api/dummy"], () => listDummy());

  const router = useRouter();

  const detail = useMemo(() => {
    const detail = dummy?.data.find((item) => item.id == props.params.id);
    if (!detail) {
      notFound();
    }

    return detail;
  }, [dummy?.data, props.params.id]);

  return (
    <Card
      title="Detail List"
      extra={<Button onClick={() => router.back()}>Back</Button>}
    >
      <p>{detail.name}</p>
    </Card>
  );
};

export default Detail;
