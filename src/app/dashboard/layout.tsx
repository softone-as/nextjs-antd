import MainLayout from "@/components/layouts/main";
import { Button, Col, Row } from "antd";
import Link from "next/link";

type TDashboardLayoutProps = {
  children: React.ReactNode;
  chart: React.ReactNode;
  graph: React.ReactNode;
};

export default function DashboardLayout({
  children,
  chart,
  graph,
}: TDashboardLayoutProps) {
  return (
    <MainLayout>
      <Row justify="space-between">
        <Col>
          <h1>Dashboard Page</h1>
        </Col>
        <Col>
          <Button>
            <Link href="/list">List</Link>
          </Button>
        </Col>
      </Row>
      {children}

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={12}>{chart}</Col>
        <Col span={12}>{graph}</Col>
      </Row>
    </MainLayout>
  );
}
