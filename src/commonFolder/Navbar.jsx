import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" w-full z-50 backdrop-blur-xl bg-gray-950/70 border-b border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6  ">
    
        <Link to="/" className="text-cyan-400 font-bold text-2xl md:text-3xl">
          AI Agent Builder
        </Link>

      
        <nav className="hidden md:flex space-x-8 text-white font-medium text-lg">
          <Link to="/" className="hover:text-cyan-400 transition-colors duration-200">
            Home
          </Link>
          <Link to="/agent" className="hover:text-cyan-400 transition-colors duration-200">
            Agent
          </Link>
          <Link to="/about" className="hover:text-cyan-400 transition-colors duration-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-cyan-400 transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-950/90 border-t border-gray-800">
          <ul className="flex flex-col p-4 space-y-4 text-white font-medium text-lg">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/agent" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
                Agent
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;