import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden relative z-[999]">
      <button onClick={toggleMenu} className="text-[#5d88f7] text-3xl">
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-14 bg-[#10152b] p-6 rounded-lg shadow-xl border border-[#1f2a45] backdrop-blur-md">
          <ul className="space-y-4 text-right">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white hover:text-[#5d88f7] font-medium transition"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
