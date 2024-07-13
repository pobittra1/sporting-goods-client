import { AlignRight, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { styles } from "@/css/styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <AlignRight className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0 w-[200px]">
              <a href="#" className="text-white font-bold text-xs">
                <img src={logo} alt="logo image here" />
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6 mt-2">
              <div className="flex space-x-6">
                <a href="#" className={`${styles.underlineAnim} `}>
                  Home
                </a>
                <a href="#" className={`${styles.underlineAnim} `}>
                  About
                </a>
                <a href="#" className={`${styles.underlineAnim} `}>
                  Services
                </a>
                <a href="#" className={`${styles.underlineAnim} `}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? "block text-right" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
