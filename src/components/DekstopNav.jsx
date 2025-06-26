// src/components/DekstopNav.jsx
import React from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

const DekstopNav = () => {
  return (
    <ul className="hidden lg:flex space-x-8 items-center">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="relative text-slate-300 hover:text-white transition duration-200 font-medium after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#5d88f7] after:transition-all after:duration-300"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DekstopNav;
