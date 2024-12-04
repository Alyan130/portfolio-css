"use client";

import Link from "next/link";
import React, { useState } from "react";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa"; 
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Alyan Ali</div>
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link href="/">Main</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}
