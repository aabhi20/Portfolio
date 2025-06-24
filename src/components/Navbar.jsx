import React from "react";
import { useState } from "react";
import DekstopNav from "./DekstopNav";
import MobileNav from "./MobileNav";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0  flex justify-between items-center py-5 px-5 lg:px-15 shadow-lg z-100 bg-[#110a22]">
      <a className="text-2xl  text-white" href="#Home">
        Abhay Mishra
      </a>

      <DekstopNav />
      <button className=" border border-[#1f2a45]  bg-[#93e0f8] px-4 py-2 bg-">
        <a href="#contact " className="text-[#000] font-bold">
          Contact me
        </a>
      </button>
    </header>
  );
};

export default Navbar;

// Base Text	Ghost White	#F5F5F5	text-white
// Sub Text	Slate Gray	#94A3B8	text-slate-400
// Muted Text	Charcoal Gray	#64748B	text-slate-500
