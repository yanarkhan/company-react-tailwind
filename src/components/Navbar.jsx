import { useState } from "react";
import logo from "../assets/logo.png";
/* React Icon */
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <header className="bg-white max-w-screen-2xl mx-auto p-4 text-primary border-b fixed top-0 right-0 left-0 md:px-14 ">
        <nav className="container mx-auto flex items-center justify-between text-lg font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold text-primary flex items-center space-x-3"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-10 inline-block items-center"
              />
              <span>ReactJS</span>
            </a>

            {/* NavItem */}
            <ul className="hidden space-x-12 md:flex ">
              {navItems.map(({ link, path }) => (
                <a
                  key={link}
                  href={path}
                  className="block transition duration-400 hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>

          {/* Language & Sign Up */}
          <div className="hidden space-x-12 items-center md:flex">
            <a
              href="/"
              className="hidden items-center transition duration-400 hover:text-gray-300 lg:flex"
            >
              <GrLanguage className="mr-2" />
              <span>Language</span>
            </a>
            <button className="bg-secondary py-2 px-4 transition duration-400 rounded hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div>

          {/* Menu Button (On Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* NavLinks for Mobile */}
      <div
        className={`text-xl space-y-4 px-4 pt-24 pb-5 bg-secondary ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a
            key={link}
            href={path}
            className="block transition duration-400 hover:text-gray-300"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
