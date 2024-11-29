import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import Navbar from "./components/navbar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import AdminDashboard from "./app/dashboard/admin-dashboard";
import TeachersList from "./app/teachers-list/teachers-list";

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="bg-background ">
            <div className="flex relative justify-center w-full">
              <Navbar />
            </div>
            <div className="m-4">
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/list/teachers" element={<TeachersList />} />
              </Routes>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default App;
