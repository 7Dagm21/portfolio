import { useState } from "react";
import { Link, NavLink } from "react-router";
import { useTheme } from "@/context/useTheme";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const headerClasses = isDark
    ? "sticky top-0 z-50 border-b border-blue-500/20 bg-[#0A0A0A]/90 shadow-[0_0_40px_rgba(37,99,235,0.08)] backdrop-blur-xl"
    : "sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-[0_0_40px_rgba(15,23,42,0.06)] backdrop-blur-xl";

  const brandClasses = isDark
    ? "text-lg font-semibold tracking-wide text-white transition duration-300 hover:text-blue-300"
    : "text-lg font-semibold tracking-wide text-slate-900 transition duration-300 hover:text-blue-600";

  const navItemClasses = isDark
    ? {
        active: "bg-blue-600/20 text-blue-300",
        inactive: "text-gray-300 hover:bg-blue-600/10 hover:text-white",
      }
    : {
        active: "bg-blue-100 text-blue-700",
        inactive: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
      };

  const menuButtonClasses = isDark
    ? "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 transition duration-300 hover:bg-blue-500/20 md:hidden"
    : "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition duration-300 hover:bg-slate-200 md:hidden";

  const themeButtonClasses = isDark
    ? "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 transition duration-300 hover:bg-blue-500/20"
    : "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition duration-300 hover:bg-slate-200";

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex h-20 w-full max-w-400 items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link to="/" className={brandClasses}>
          User
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive ? navItemClasses.active : navItemClasses.inactive
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle color theme"
            className={themeButtonClasses}
            onClick={toggleTheme}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              {isDark ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                />
              )}
            </svg>
          </button>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className={menuButtonClasses}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t px-4 transition-[max-height,opacity] duration-300 md:hidden ${
          isDark
            ? "border-blue-500/20 bg-[#0A0A0A]/95"
            : "border-slate-200 bg-white/95"
        } ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="mx-auto flex w-full max-w-400 items-center justify-between gap-3 py-4 px-4 sm:px-6 lg:px-10">
          <span
            className={`text-sm font-medium ${isDark ? "text-white/60" : "text-slate-500"}`}
          >
            Theme
          </span>
          <button
            type="button"
            aria-label="Toggle color theme"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition duration-300 md:hidden ${
              isDark
                ? "border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20"
                : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            onClick={toggleTheme}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              {isDark ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                />
              )}
            </svg>
          </button>
        </div>

        <nav className="mx-auto flex w-full max-w-400 flex-col gap-1 py-2 px-4 sm:px-6 lg:px-10">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-medium transition duration-300 ${
                  isActive ? navItemClasses.active : navItemClasses.inactive
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
