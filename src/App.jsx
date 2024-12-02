import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import Navbar from "./components/navbar";
import { SidebarInset } from "./components/ui/sidebar";
import AdminDashboard from "./app/dashboard/admin-dashboard";
import TeachersPage from "./app/teachers-page/teachers-page";

function App() {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <div className="bg-background ">
          <div className="flex relative justify-center w-full">
            <Navbar />
          </div>
          <div className="m-4">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/list/teachers" element={<TeachersPage />} />
            </Routes>
          </div>
        </div>
      </SidebarInset>
    </>
  );
}

export default App;
