import React from "react";
import DekstopNav from "./DekstopNav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 
      bg-[#110a22]/70 backdrop-blur-md border-b border-[#1f2a45]
      px-6 lg:px-12 py-4 flex justify-between items-center 
      shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
    >
      {/* Logo */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl font-bold tracking-wider px-4 py-2 rounded-xl
        bg-[#1a2238] text-transparent bg-clip-text 
        bg-gradient-to-r from-[#5d88f7] to-[#00c4ff]
        border border-[#2c3552] shadow-lg 
        hover:scale-105 transition-transform duration-300"
      >
        AM
      </motion.a>

      {/* Desktop Navigation */}
      <DekstopNav />

      {/* Contact Me Button (only on sm and above) */}
      <a
        href="#contact"
        className="hidden sm:inline-block ml-4 bg-[#93e0f8] text-black font-semibold 
        px-5 py-2 rounded-xl border border-[#1f2a45] shadow-md 
        hover:scale-105 hover:bg-[#7bd6f2] transition duration-300"
      >
        Contact Me
      </a>

      {/* Mobile Navigation Icon */}
      <div className="sm:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
