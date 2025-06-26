import React from "react";
import DekstopNav from "./DekstopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 
      bg-[#110a22]/70 backdrop-blur-md border-b border-[#1f2a45]
      px-6 lg:px-12 py-4 flex justify-between items-center 
      shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
    >
      <a
        href="#home"
        className="text-2xl font-extrabold bg-gradient-to-r from-[#5d88f7] to-[#00c4ff] 
        text-transparent bg-clip-text tracking-wide hover:opacity-90 transition-all duration-200"
      >
        Abhay Mishra
      </a>

      <DekstopNav />

      <a
        href="#contact"
        className="hidden sm:inline-block ml-4 bg-[#93e0f8] text-black font-semibold 
        px-5 py-2 rounded-xl border border-[#1f2a45] shadow-md 
        hover:scale-105 hover:bg-[#7bd6f2] transition duration-300"
      >
        Contact Me
      </a>

      <div className="sm:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
