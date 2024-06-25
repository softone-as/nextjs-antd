"use client";

import useSWR from "swr";
import { getUser } from "./actions";

const ProfilePage = () => {
  const { data: user } = useSWR(["/api/user/1"], () => getUser(1));

  return <p>{user?.data?.name}</p>;
};

export default ProfilePage;
