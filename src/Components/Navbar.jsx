import { NavLink } from "react-router-dom";

function Navbar() {
  // Base styles applied to all links
  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
      isActive
        ? "bg-blue-500 text-white hover:bg-blue-600 "
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <nav className="bg-white shadow-md">
        {/* Navigation Links */}
        <div classNName="flex gap-2">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
          <NavLink to="/login" className={linkStyle}>
            Login
          </NavLink>
          <NavLink to="/dashboard" className={linkStyle}>
            Dashboard
          </NavLink>
        </div>
    </nav>
  );
}

export default Navbar;