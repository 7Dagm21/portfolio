import { NavLink } from "react-router";

interface NavLinkItem {
  path: string;
  label: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },

];

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className = "" }: NavLinksProps) => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `btn btn-ghost btn-sm ${isActive ? "bg-base-200" : ""}`;

  return (
    <ul className={`menu menu-horizontal px-1 gap-1 ${className}`}>
      {NAV_LINKS.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={linkClass}
            end={link.path === "/"}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
