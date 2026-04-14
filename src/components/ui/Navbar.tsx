import { Link } from "react-router";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 border-b border-base-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Portfolio
        </Link>
      </div>
      <div className="flex-none">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
