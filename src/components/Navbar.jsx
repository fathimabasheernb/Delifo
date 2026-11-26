import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Frame.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", path: "/features" },
    { label: "Solutions", path: "/solutions" },
    { label: "Pricing", path: "/pricing" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" }
  ];

  const linkStyle = ({ isActive }) =>
    `transition-colors whitespace-nowrap ${
      isActive
        ? "text-[#ff2e3d]"
        : "text-gray-600 hover:text-[#ff2e3d]"
    }`;

  return (
    <header className="relative z-30 w-full">
      <nav className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">

        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Delifo Delivery App"
            className="w-[122px] h-[33px] object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8 bg-white rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-gray-100 px-9 py-3 text-xs font-medium">

          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={linkStyle}
            >
              {item.label}
            </NavLink>
          ))}

        </div>

        {/* LOGIN BUTTON */}
        <button
          type="button"
          className="hidden md:inline-flex items-center justify-center bg-[#191919] text-white w-[112px] h-[40px] rounded-full text-xs font-semibold hover:bg-[#ff2e3d] transition-colors shrink-0"
        >
          Login
        </button>

        {/* MOBILE MENU */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden text-2xl text-[#252525] leading-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-5 right-5 z-40 bg-white shadow-xl border border-gray-100 rounded-2xl p-6 flex flex-col gap-4">

          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#ff2e3d]"
                    : "text-gray-700 hover:text-[#ff2e3d]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            type="button"
            className="mt-1 bg-[#191919] text-white h-[42px] rounded-full text-sm font-semibold hover:bg-[#ff2e3d] transition-colors"
          >
            Login
          </button>

        </div>
      )}

    </header>
  );
}

export default Navbar;