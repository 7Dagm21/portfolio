import { Outlet } from "react-router";
import ScrollToTop from "@/components/ScrollToTop";
import { Footer, Header } from "@/components/ui";
import { LanguageProvider } from "@/context/LanguageContext";
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
      <ScrollToTop />
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
    <LanguageProvider>
      <ThemeProvider>
        <LayoutShell />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default RootLayout;
