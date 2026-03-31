"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-black/80 backdrop-blur-md text-white fixed w-full z-50 shadow-lg">
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between h-10">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          MyCompany
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/about" className="hover:text-cyan-400 transition">About</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-black/95">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
