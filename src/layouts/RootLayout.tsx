import { Outlet } from "react-router";
import { Footer, Header } from "@/components/ui";
import { ThemeProvider } from "@/context/ThemeContext";
import { useTheme } from "@/context/useTheme";

const LayoutShell = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen w-full flex flex-col transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const RootLayout = () => {
  return (
    <ThemeProvider>
      <LayoutShell />
    </ThemeProvider>
  );
};

export default RootLayout;
