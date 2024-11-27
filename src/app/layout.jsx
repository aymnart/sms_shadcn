import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AdminDashboard from "./dashboard/admin-dashboard";
import Navbar from "@/components/navbar";
import { AppSidebar } from "@/components/app-sidebar";
import { Route, Routes } from "react-router-dom";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="bg-background ">
          <div className="flex justify-center  w-full">
            <Navbar />
          </div>
          <div className="m-4">
            <Routes>
              <Route path="/dashboard" element={<AdminDashboard />} />
            </Routes>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
