import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside of it
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
    <nav className="px-10 py-4">
      <div className="container mx-auto flex justify-between items-center h-12  drop-shadow-sm">
        <div className="text-gray-700 ml-16 font-bold text-xl">
        <Link to="/">
          Popz<span className='text-red-500 font-thin'>Up</span>
        </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className={`lg:hidden ${isOpen ? 'hidden' : 'block'}`}>
          <button
            onClick={toggleNavbar}
            className="text-gray-700 focus:outline-none focus:shadow-outline my-6"
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar links */}
        <div
          ref={menuRef}
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto mr-8`}
        >
          <div className='flex items-center'>
            <Link to="/register">
              <a
                rel="noopener noreferrer"
                className="bg-slate-200 text-gray-800 px-6 py-3 rounded-md mb-2 ml-4 
           shadow-md border border-gray-300 font-semibold 
           transition duration-300 ease-in-out
           hover:bg-slate-300 hover:text-gray-900 hover:shadow-lg 
           focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
              >
                Business Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
