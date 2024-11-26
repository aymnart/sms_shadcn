import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigate } from "react-router-dom";
import OverviewTab from "./components/overview";

export default function Admin() {
  return (
    <div className="mt-20 lg:mx-4">
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
        <TabsContent value="analytics">
          <Navigate to={"/analytics"} />
        </TabsContent>
        <TabsContent value="finance">
          <Navigate to={"/finance"} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
