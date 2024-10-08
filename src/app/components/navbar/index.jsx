"use client";

import Link from "next/link";
import { useState } from "react";

import Hamburger from "@/app/icons/hamburger";
import HamburgerOpen from "@/app/icons/hamburger-open";
import Close from "@/app/icons/close";
import "./_navbar.scss";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <Link href="/" className="alien-home">
        👽
      </Link>
      <section className="routes">
        <Link href="/">Home</Link>
        <Link href="/">Products</Link>
        <Link href="/">Services</Link>
      </section>
      <button className="toggle-drawer-btn" onClick={handleToggleMenu}>
        {openMenu ? (
          <HamburgerOpen className="hamburger" />
        ) : (
          <Hamburger className="hamburger" />
        )}
      </button>
      <section className={`drawer-menu ${openMenu ? "show" : ""}`}>
        <button className="close-drawer-btn" onClick={() => setOpenMenu(false)}>
          <Close className="close-icon" />
        </button>
        <section className="routes">
          <Link href="/">Home</Link>
          <Link href="/">Products</Link>
          <Link href="/">Services</Link>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
