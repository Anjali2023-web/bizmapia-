import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Topbar() {
  const { userData } = useAuth();

  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">WELCOME TO YOUR DASHBOARD</h1>
        <div className="text-xl font-semibold mt-1">{userData?.fullName}</div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex space-x-4">
          <Link to="/">
            <button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm font-semibold 
                transition duration-300 ease-in-out hover:bg-gray-600 focus:outline-none 
                focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Home
            </button>
          </Link>
        </div>
        {/* Link the avatar to the profile page */}
        <Link to="/profile_update">
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/43/04/avatar-social-media-isolated-icon-design-vector-10704304.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover cursor-pointer hover:opacity-80"
          />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
