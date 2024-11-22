import "./App.css";
import DashboardLayout from "./app/dashboard/layout";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <DashboardLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
