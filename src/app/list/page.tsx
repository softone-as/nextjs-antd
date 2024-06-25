"use client";

import DataTable from "@/components/datatable";
import MainLayout from "@/components/layouts/main";
import { listDummy } from "./actions";
import useSWR from "swr";
import Link from "next/link";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: true,
    render: (id: string) => <Link href={`list/${id}`}>{id}</Link>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
];

const ListPage = () => {
  const { data: dummy } = useSWR(["/api/dummy"], () => listDummy());

  return <DataTable columns={columns} source={dummy} />;
};

export default ListPage;
