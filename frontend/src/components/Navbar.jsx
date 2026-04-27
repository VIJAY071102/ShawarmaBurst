import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black text-white p-4 h-24 flex items-center justify-center gap-10">
      {/* Logo */}
      <div>
        <img src="/logo.png" alt="logo" className="h-18" />
      </div>

      {/* Menu */}
      <ul className="flex items-center justify-center gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          <li>About</li>
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          <li>Menu</li>
        </NavLink>

        <NavLink
          to="/franchise"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          <li>Franchise</li>
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          <li>Gallery</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
