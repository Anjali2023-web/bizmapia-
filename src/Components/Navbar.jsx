import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import logo from './bizmapia-logo.png';
 // Adjust the path as necessary

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="bg-gradient-to-r from-gray-700 to-slate-600 text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl sm:text-2xl font-bold"
            >
              <img src={logo} alt="Bizmapia Logo" className="h-10" /> {/* Use the logo image here */}
            </motion.div>
          </Link>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleNavbar}
              className="text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md p-2"
            >
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </motion.button>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold 
                transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                List Your Business
              </motion.button>
            </Link>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold 
                transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none 
                focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Post a Free Ad
              </motion.button>
            </Link>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm font-semibold 
                transition duration-300 ease-in-out hover:bg-gray-600 focus:outline-none 
                focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Sign Up / Sign In
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 sticky top-0 bg-gray-800 z-10">
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full max-w-xs mx-auto bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold 
                  transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none 
                  focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  List Your Business
                </motion.button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full max-w-xs mx-auto bg-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold 
                  transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none 
                  focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Post a Free Ad
                </motion.button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full max-w-xs mx-auto bg-gray-500 text-white px-4 py-2 rounded-md text-sm font-semibold 
                  transition duration-300 ease-in-out hover:bg-gray-600 focus:outline-none 
                  focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  Sign Up / Sign In
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
