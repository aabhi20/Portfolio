import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
];

const DesktopNav = () => {
  return (
    <ul className="hidden lg:flex space-x-8 items-center">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            to={link.to}
            spy={true}
            smooth={true}
            duration={500}
            offset={-80} // Adjust for navbar height
            activeClass="active-link"
            className="text-slate-300 cursor-pointer font-medium transition duration-300 relative hover:text-[#5d88f7]"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
