import { useTheme } from "@/context/ThemeContext";

const HomePage = () => {
  const { isDark } = useTheme();

  return (
    <section className="flex min-h-[calc(100vh-9rem)] w-full items-center justify-center px-4 py-20 sm:px-6 lg:px-10">
      <div
        className={`w-full max-w-400 rounded-3xl p-8 shadow-sm sm:p-12 lg:p-16 ${
          isDark
            ? "border border-white/10 bg-white/5"
            : "border border-slate-200/70 bg-white"
        }`}
      >
        <p
          className={`text-sm font-semibold uppercase tracking-[0.3em] ${
            isDark ? "text-blue-300" : "text-blue-600"
          }`}
        >
          Welcome
        </p>
        <h1
          className={`mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Hello world
        </h1>
        <p
          className={`mt-4 max-w-2xl text-base leading-7 sm:text-lg ${
            isDark ? "text-white/60" : "text-slate-600"
          }`}
        >
          This home section now fills the desktop viewport more naturally so
          the layout feels balanced instead of tiny.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
