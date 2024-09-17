import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./bizmapia-logo.png"; // Adjust the path as necessary
import { useAuth } from "../context/AuthContext";

// List of Kerala districts for the dropdown
const districts = [
  "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod",
  "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad",
  "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("Select District");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { isAuthenticated } = useAuth();

  const toggleNavbar = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="bg-gradient-to-r from-gray-700 to-slate-600 text-white shadow-lg fixed top-0 w-full z-50"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl sm:text-2xl font-bold"
          >
            <img src={logo} alt="Bizmapia Logo" className="h-10" />
          </motion.div>
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={toggleNavbar}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Search Bar with Location Dropdown (Hidden on Mobile) */}
        <div className="hidden md:flex flex-grow items-center mx-4 bg-white rounded-md overflow-hidden">
          {/* Dropdown for Location */}
          <select
            value={selectedDistrict}
            onChange={handleDistrictChange}
            className="bg-gray-100 text-gray-700 px-4 py-2 focus:outline-none"
          >
            <option disabled>Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search business here"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />

          {/* Search Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m2.1-5.65a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0z"
              />
            </svg>
          </button>
        </div>

        {/* Sign Up / Sign In Button (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm font-semibold 
                transition duration-300 ease-in-out hover:bg-gray-600 focus:outline-none 
                focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              {isAuthenticated ? "Go To Dashboard" : "Sign Up / Sign In"}
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800"
          >
            <div className="px-4 py-4 flex flex-col items-center">
              {/* Mobile Dropdown for Location */}
              <select
                value={selectedDistrict}
                onChange={handleDistrictChange}
                className="w-full mb-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-md focus:outline-none"
              >
                <option disabled>Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>

              {/* Search Input for Mobile */}
              <input
                type="text"
                placeholder="Search business here"
                className="w-full mb-4 px-4 py-2 rounded-md text-gray-700 focus:outline-none"
              />

              {/* Search Button for Mobile */}
              <button className="w-full mb-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
                Search
              </button>

              {/* Sign Up / Sign In Button */}
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gray-500 text-white px-4 py-2 rounded-md text-sm font-semibold 
                  transition duration-300 ease-in-out hover:bg-gray-600 focus:outline-none 
                  focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  {isAuthenticated ? "Go To Dashboard" : "Sign Up / Sign In"}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
