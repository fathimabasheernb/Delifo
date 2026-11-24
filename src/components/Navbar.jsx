import React, { useState } from "react";
import logo from "../assets/Frame.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Features",
    "Solutions",
    "Pricing",
    "Blog",
    "Contact Us"
  ];

  return (

    <nav className="relative z-30 flex items-center justify-between px-6 md:px-16 py-5">

      {/* LOGO */}

      {/* LOGO */}

<div className="flex items-center">
  <img
    src={logo}
    alt="Delifo Delivery App"
    className="w-[122px] h-[33px] object-contain"
  />
</div>


      {/* DESKTOP NAVIGATION */}

      <div className="hidden md:flex items-center gap-7 bg-white rounded-full shadow-md px-8 py-3 text-xs font-medium text-gray-600">

        {navLinks.map((item) => (

          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="hover:text-red-500 transition"
          >
            {item}
          </a>

        ))}

      </div>


      {/* LOGIN BUTTON */}

      <button className="hidden md:block bg-[#191919] text-white px-8 py-3 rounded-full text-xs font-semibold hover:bg-red-500 transition">
        Login
      </button>


      {/* MOBILE MENU BUTTON */}

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl"
      >
        {menuOpen ? "✕" : "☰"}
      </button>


      {/* MOBILE NAVIGATION */}

      {menuOpen && (

        <div className="absolute top-full left-5 right-5 bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-5 md:hidden">

          {navLinks.map((item) => (

            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-700 hover:text-red-500"
            >
              {item}
            </a>

          ))}

          <button className="bg-black text-white py-3 rounded-full text-sm">
            Login
          </button>

        </div>

      )}

    </nav>

  );
}

export default Navbar;