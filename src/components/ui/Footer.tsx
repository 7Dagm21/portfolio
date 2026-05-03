import { Link } from "react-router";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-blue-500/20 bg-[#0A0A0A]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Link
            to="/"
            className="text-lg font-semibold text-white transition duration-300 hover:text-blue-300"
          >
            User
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
            Personal portfolio — projects, skills, and ways to get in touch.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Email:{" "}
            <a
              href="mailto:user@example.com"
              className="text-blue-400 transition duration-300 hover:text-blue-300"
            >
              user@example.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-200">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="inline-flex text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-blue-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-200">
            Contact &amp; social
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:text-blue-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:text-blue-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:text-blue-300"
              >
                X
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-500/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} User. All rights reserved.</p>
          <p>Built with React and TypeScript.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
