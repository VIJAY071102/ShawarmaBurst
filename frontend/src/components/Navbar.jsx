import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 border-b-2 border-yellow-400"
      : "text-white hover:text-yellow-300 transition duration-300";

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="flex items-center justify-between px-4 h-20">

        <div className="flex items-center gap-3 cursor-pointer group">
          <img
            src="/logo.png"
            alt="logo"
            className="h-14 transition-transform duration-300 group-hover:scale-110"
          />

          <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent group-hover:scale-105 transition duration-300">
            ShawarmaBurst
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 items-center font-medium">
          <NavLink to="/" end className={linkClass}>
            <li>Home</li>
          </NavLink>

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
          className="md:hidden text-3xl hover:text-yellow-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center gap-4 pb-4 md:hidden bg-black animate-fadeIn">
          <NavLink to="/" end className={linkClass} onClick={() => setIsOpen(false)}>
            <li>Home</li>
          </NavLink>

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