"use server";

export type ResponseData = {
  data: { id: number; name: string };
};

export const getUser = async (id: number): Promise<ResponseData> => {
  const endpoint = new URL(
    `/api/user/${id}`,
    process.env.NEXT_PUBLIC_API_BASE_URL,
  ).toString();

  const res = await fetch(endpoint);

  return res.json();
};
