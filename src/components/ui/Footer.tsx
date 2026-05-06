import { Link } from "react-router";
import { useTheme } from "@/context/useTheme";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.5v-1.74c-2.78.62-3.37-1.2-3.37-1.2-.45-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .08 1.53 1.05 1.53 1.05.88 1.55 2.31 1.1 2.88.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.74 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.96-2.35 4.82-4.58 5.08.36.32.68.95.68 1.92v2.85c0 .27.18.6.69.5A10.28 10.28 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <path d="M5.75 3.5A2.25 2.25 0 1 0 5.75 8a2.25 2.25 0 0 0 0-4.5ZM3.5 9.5h4.5V21H3.5V9.5Zm7 0h4.3v1.57h.06c.6-1.07 2.06-2.2 4.24-2.2 4.54 0 5.38 3.04 5.38 6.99V21H20V16.6c0-1.06-.02-2.43-1.45-2.43-1.45 0-1.67 1.17-1.67 2.35V21h-4.38V9.5Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:user@example.com",
    icon: (
      <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm2 .15v.22l7 4.9 7-4.9V6.9H5Zm14 2.66-6.43 4.5a1 1 0 0 1-1.14 0L5 9.56v7.69c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V9.56Z" />
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <path d="m18.2 2h3.3l-7.2 8.3L23 22h-6.7l-5.2-6.8L5.2 22H1.9l7.7-8.9L1 2h6.8l4.7 6.2L18.2 2Zm-1.2 17.9h1.8L6.8 4h-2l12.2 15.9Z" />
    ),
  },
];

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`relative mt-16 ${isDark ? "bg-[#0A0A0A]" : "bg-white"}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-1/2">
        <div
          className={`mx-auto h-px max-w-400 bg-linear-to-r from-transparent ${
            isDark ? "via-blue-300/30" : "via-slate-300/60"
          } to-transparent`}
        />
        <div
          className={`mx-auto mt-0 h-2 max-w-350 bg-linear-to-r from-transparent ${
            isDark ? "via-blue-500/10" : "via-slate-300/20"
          } to-transparent blur-sm`}
        />
      </div>

      <div className="mx-auto grid w-full max-w-400 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-10">
        <div>
          <Link
            to="/"
            className={`text-lg font-semibold transition duration-300 ${
              isDark
                ? "text-white hover:text-blue-300"
                : "text-slate-900 hover:text-blue-600"
            }`}
          >
            User
          </Link>
          <p
            className={`mt-4 max-w-sm text-sm leading-6 ${isDark ? "text-gray-400" : "text-slate-600"}`}
          >
            Personal portfolio — projects, skills, and ways to get in touch.
          </p>
          <p
            className={`mt-4 text-sm ${isDark ? "text-gray-400" : "text-slate-600"}`}
          >
            Email:{" "}
            <a
              href="mailto:user@example.com"
              className={`transition duration-300 ${
                isDark
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-700"
              }`}
            >
              user@example.com
            </a>
          </p>
        </div>

        <div>
          <h3
            className={`text-sm font-semibold uppercase tracking-widest ${
              isDark ? "text-gray-200" : "text-slate-900"
            }`}
          >
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`inline-flex text-sm transition duration-300 hover:translate-x-1 ${
                    isDark
                      ? "text-gray-400 hover:text-blue-300"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className={`text-sm font-semibold uppercase tracking-widest ${
              isDark ? "text-gray-200" : "text-slate-900"
            }`}
          >
            Contact &amp; social
          </h3>
          <p
            className={`mt-4 text-sm ${isDark ? "text-gray-400" : "text-slate-600"}`}
          >
            Connect through socials or send a quick email.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={`group inline-flex h-10 w-10 items-center justify-center rounded-xl border shadow-[0_0_0_rgba(59,130,246,0)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(59,130,246,0.25)] ${
                  isDark
                    ? "border-blue-500/30 bg-blue-500/10 text-blue-300 hover:border-blue-400/80 hover:bg-blue-500/20 hover:text-white hover:shadow-[0_0_24px_rgba(59,130,246,0.45)]"
                    : "border-slate-200 bg-slate-100 text-slate-700 hover:border-blue-400/60 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                >
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`border-t ${isDark ? "border-blue-500/5" : "border-slate-200"}`}
      >
        <div
          className={`mx-auto flex w-full max-w-400 flex-col items-center justify-between gap-2 px-4 py-4 text-xs sm:flex-row sm:px-6 lg:px-10 ${
            isDark ? "text-gray-500" : "text-slate-500"
          }`}
        >
          <p>© {new Date().getFullYear()} User. All rights reserved.</p>
          <p>Built with React and TypeScript.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
