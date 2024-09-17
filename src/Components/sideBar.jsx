import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar for mobile
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar visibility
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/logout"); // Navigate to the logout route
    }
  };

  return (
    <div className="relative">
      {/* Hamburger Menu for Mobile View */}
      

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 bg-gray-800 text-white h-screen transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-xl font-semibold">Dashboard</div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {/* Main Dashboard button */}
            <li>
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full text-left p-4 hover:bg-gray-700"
              >
                Dashboard
              </button>
            </li>
            {/* Listings Management dropdown */}
            <li>
              <button
                onClick={toggleDropdown}
                className="w-full text-left flex items-center p-4 border border-gray-900 hover:bg-gray-700"
              >
                Listings Management
                
              </button>
              {isDropdownOpen && (
                <ul className="space-y-2 pl-6">
                  <li>
                    <button
                      onClick={() => navigate("/listings")}
                      className="block p-2 hover:bg-gray-700 w-full text-left"
                    >
                      Active Listings
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate("/addlist")}
                      className="block p-2 hover:bg-gray-700 w-full text-left"
                    >
                      Add New Listing
                    </button>
                  </li>
                </ul>
              )}
            </li>
            {/* Additional buttons */}
            <li>
              <button
                onClick={() => navigate("/profile_update")}
                className="w-full text-left p-4 hover:bg-gray-700"
              >
                Edit Profile
              </button>
              <button
                onClick={() => navigate("/reqcat")}
                className="w-full text-left p-4 hover:bg-gray-700"
              >
                Request Category
              </button>
              <button
                onClick={() => navigate("/upload")}
                className="w-full text-left p-4 hover:bg-gray-700"
              >
                Featured Advertisement
              </button>
              <button
                onClick={() => navigate("/video")}
                className="w-full text-left p-4 hover:bg-gray-700"
              >
                Featured Video
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/resetpwd")}
                className="w-full text-left p-4 hover:bg-gray-700"
              >
                Change Password
              </button>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full text-left flex items-center p-4 hover:bg-gray-700"
          >
            Logout
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Sidebar;
