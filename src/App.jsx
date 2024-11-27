import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import Navbar from "./components/navbar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import AdminDashboard from "./app/dashboard/admin-dashboard";

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="bg-background ">
            <div className="flex justify-center w-full">
              <Navbar />
            </div>
            <div className="m-4">
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
              </Routes>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default App;
