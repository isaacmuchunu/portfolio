"use client";
import React, { useState } from "react";
import Link from "next/link";


import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay"

import { Bars3Icon, XMarkIcon } from "@heroIcons/react/24/solid";



const navLinks = [
  { title: "about", path: "#about" },
  { title: "projects", path: "#projects" },
  { title: "blog", path: "#blog" },
  { title: "Contact", path: "#contact" },
];
const Navbar = () => {
  const [navBarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed right-0 left-0 top-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-white mb-4 text-2xl md:text-5xl font-semibold"
        >
          Logo
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden uppercase md:w-auto md:block" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row mt-0 md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink title={link.title} href={link.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen? <MenuOverlay links={navLinks}/>: null}
    </nav>
  );
};
export default Navbar;
