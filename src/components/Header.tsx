"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-pink-500 text-white py-5 flex justify-between items-center px-10 relative z-10">
      {/* Logo */}
      <h1 className="text-2xl font-bold">MakeUp City</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10 text-white font-bold">
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About Us
        </Link>
        <Link href="/makeup" onClick={closeMenu}>
          MakeUp City
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <FaShoppingCart className="text-white text-xl" aria-label="Shopping Cart" />
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        {isMenuOpen ? (
          <HiX
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
            aria-label="Close Menu"
          />
        ) : (
          <HiMenuAlt3
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
            aria-label="Open Menu"
          />
        )}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-pink-500 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-20`}
      >
        <nav className="flex flex-col items-center gap-6 mt-20 text-white font-bold">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About Us
          </Link>
          <Link href="/makeup" onClick={closeMenu}>
            MakeUp City
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <FaShoppingCart className="text-white text-xl" aria-label="Shopping Cart" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
