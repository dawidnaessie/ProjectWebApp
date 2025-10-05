import Button from "./Button";
import logo from "../assets/react.svg";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import AuthButtons from "./AuthButton";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // for mobile
  const [isMoreOpen, setIsMoreOpen] = useState(false); //for desktop

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div>
          <img src={logo} alt="Catering Logo" className="h-16 w-16" />
        </div>

        <ul className="hidden md:flex justify-between items-center space-x-6 text-gray-100">
          <li>
            <a
              href="/"
              className="text-gray-100 hover:text-emerald-300 no-underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/menu"
              className="text-gray-100 hover:text-emerald-300 no-underline"
            >
              Menu
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1 hover:text-emerald-300"
            >
              More
              <ChevronDown size={16} />
            </button>
            {isMoreOpen && (
              <ul className="border-solid border-1 border-emerald-800 absolute mt-2 bg-emerald-700 rounded shadow-lg py-2 w-40 rounded-md">
                <li>
                  <a
                    href="/about"
                    className="block px-4 py-2 hover:bg-emerald-800 hover:text-emerald-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block px-4 py-2 hover:bg-emerald-800 hover:text-emerald-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div className="hidden md:flex">
            <AuthButtons isMobile={false} />
        </div>

        <button
          className="md:hidden text-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="border-solid border-2 border-emerald-700 md:hidden bg-emerald-800 bg-opacity-95 backdrop-blur-sm w-full flex flex-col items-center px-4 py-4 space-y-4 rounded-xl shadow-lg">
          <a href="/" className="block px-4 py-2 rounded hover:bg-emerald-700 hover:text-emerald-200 transition-colors duration-200">
            Home
          </a>
          <a href="/menu" className="block px-4 py-2 rounded hover:bg-emerald-700 hover:text-emerald-200 transition-colors duration-200">
            Menu
          </a>

          {/* Collapsible More section */}
          <div>
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1 hover:text-emerald-300 hover:bg-emerald-700"
            >
              More <ChevronDown size={16} />
            </button>
            {isMoreOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="/about" className="block px-4 py-2 rounded hover:bg-emerald-700 hover:text-emerald-200 transition-colors duration-200">
                  About
                </a>
                <a href="#contact" className="block px-4 py-2 rounded hover:bg-emerald-700 hover:text-emerald-200 transition-colors duration-200">
                  Contact
                </a>
              </div>
            )}
          </div>

          {/* Auth buttons for mobile */}
          <div className="flex flex-col gap-2">
            <AuthButtons isMobile={true} />
          </div>
        </div>
      )}
    </nav>
  );
}