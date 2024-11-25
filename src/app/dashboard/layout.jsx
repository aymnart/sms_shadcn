import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Routes, Route } from "react-router-dom";
import Admin from "./admin/admin";
import Student from "./student/student";
import Parent from "./parent/parent";
import Teacher from "./teacher/teacher";
import Navbar from "@/components/navbar";
import { AppSidebar } from "@/components/app-sidebar";

<Routes>
  <Route path="/admin" element={<Admin />} />
  <Route path="/student" element={<Student />} />
  <Route path="/parent" element={<Parent />} />
  <Route path="/teacher" element={<Teacher />} />
</Routes>; 

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar />
        <div className="m-4">
          <Admin />
        </div>
      </SidebarInset> 
    </SidebarProvider>
  );
}
