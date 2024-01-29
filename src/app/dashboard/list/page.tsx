import DataTable from "@/components/datatable";
import MainLayout from "@/components/layouts/main";
import { getQueryServer } from "@/utils/fetcher";
import { listDummy } from "./actions";

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

const ListPage = async () => {
  const { data: dummy } = await getQueryServer(() => listDummy());

  return (
    <MainLayout>
      <DataTable columns={columns} source={dummy} />
    </MainLayout>
  );
};

export default ListPage;
