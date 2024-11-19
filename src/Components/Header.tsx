"use client";

import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-[#c6a455] p-4 sm:p-8 md:p-8 lg:p-10 flex justify-between items-center relative z-20 flex-wrap">
        {/* Logo */}
        <div className="hover:text-orange-500 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-red-950 mr-8 flex-grow text-center md:text-left">
          SHAFIQUE BALOCH
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row space-x-3 space-y-2 md:space-y-0 md:space-x-2 md:static top-10 left-0 w-full md:w-auto bg-[#c6a455] md:bg-transparent p-4 md:p-0 z-10`}
        >
          <a
            href="/"
            className="text-base sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white hover:text-orange-500 ml-0"
          >
            Home
          </a>
          <a
            href="/About"
            className="text-base sm:text-xl md:text-2xl lg:text-2xl font-bold text-white hover:text-orange-500"
          >
            About
          </a>
          <a
            href="/Skill"
            className="text-base sm:text-xl md:text-2xl lg:text-2xl font-bold text-white hover:text-orange-500"
          >
            Skills
          </a>
          <a
            href="/Projects"
            className="text-base sm:text-xl md:text-2xl lg:text-2xl font-bold text-white hover:text-orange-500"
          >
            Projects
          </a>
          <a
            href="/Contact"
            className="text-base sm:text-xl md:text-2xl lg:text-2xl  font-bold text-white hover:text-orange-500"
          >
            Contact
          </a>
        </nav>

      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;