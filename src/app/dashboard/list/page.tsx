"use client";

import DataTable from "@/components/datatable";
import MainLayout from "@/components/layouts/main";
import { listDummy } from "./actions";
import useSWR from "swr";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: true,
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

  return (
    <MainLayout>
      <DataTable columns={columns} source={dummy} />
    </MainLayout>
  );
};

export default ListPage;
