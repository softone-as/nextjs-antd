import MainLayout from "@/components/layouts/main";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      <h1>List Page</h1>
      {children}
    </MainLayout>
  );
}
