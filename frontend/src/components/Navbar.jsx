import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-yellow-400" : "text-white";

  return (
    <nav className="bg-black text-white">
      <div className="flex items-center justify-between px-4 h-20">
        <img src="/logo.png" alt="logo" className="h-14" />

        <ul className="hidden md:flex gap-6 items-center">
          <NavLink to="/" end className={linkClass}>
            <li>Home</li>
          </NavLink>
          {/* <NavLink to="/about" className={linkClass}>
            <li>About</li>
          </NavLink> */}
          <NavLink to="/menu" className={linkClass}>
            <li>Menu</li>
          </NavLink>
          <NavLink to="/franchise" className={linkClass}>
            <li>Franchise</li>
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            <li>Gallery</li>
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            <li>Contact</li>
          </NavLink>
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center gap-4 pb-4 md:hidden">
          <NavLink to="/" end className={linkClass} onClick={() => setIsOpen(false)}>
            <li>Home</li>
          </NavLink>
          {/* <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
            <li>About</li>
          </NavLink> */}
          <NavLink to="/menu" className={linkClass} onClick={() => setIsOpen(false)}>
            <li>Menu</li>
          </NavLink>
          <NavLink to="/franchise" className={linkClass} onClick={() => setIsOpen(false)}>
            <li>Franchise</li>
          </NavLink>
          <NavLink to="/gallery" className={linkClass} onClick={() => setIsOpen(false)}>
            <li>Gallery</li>
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
            <li>Contact</li>
          </NavLink>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;