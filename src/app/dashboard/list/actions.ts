"use server";

export type ResponseData = {
  data: { id: number; name: string }[];
  pagination: {
    current: number;
    pageSize: number;
    total: number;
  };
};

export const listDummy = async (): Promise<ResponseData> => {
  const endpoint = new URL(
    "/api/dummy",
    process.env.NEXT_PUBLIC_BASE_URL,
  ).toString();

  const res = await fetch(endpoint);

  return res.json();
};
