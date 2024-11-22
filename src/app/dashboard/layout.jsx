import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Routes, Route } from "react-router-dom";
import Admin from "./admin/admin";
import Student from "./student/student";
import Parent from "./parent/parent";
import Teacher from "./teacher/teacher";
import Navbar from "@/components/navbar";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";

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
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="ml-1" />
            <ModeToggle />

            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          <div>
            <Navbar />
          </div>
        </header>
        <div className="m-4">
          <Admin />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
