import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from "./components/overview";
import { FinanceChart } from "./components/finance-chart";
import useDocumentTitle from "@/hooks/use-document-title";

export default function AdminDashboard() {
  useDocumentTitle("Dashboard");
  return (
    <div className="mt-10 ">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Tabs defaultValue="overview" className="mt-4 w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="analytics"></TabsContent>
        <TabsContent value="finance">
          <FinanceChart />
        </TabsContent>
      </Tabs>
    </div>
  );
}
