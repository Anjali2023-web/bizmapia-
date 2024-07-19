import React, { useState } from 'react';
import { HiOutlineChevronDown } from "react-icons/hi2";

function Sidebar({ setCurrentContent }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col h-screen">
      <div className="p-4 text-xl font-semibold">Dashboard</div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <button 
              onClick={toggleDropdown} 
              className="w-full text-left flex items-center p-4 border border-gray-900 hover:bg-gray-700"
            >
              Listing's Management
              <HiOutlineChevronDown className={`ml-2 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <ul className="space-y-2 pl-6">
                <li><a href="#" className="block p-2 hover:bg-gray-700">Active Listings</a></li>
                <li><a href="#" className="block p-2 hover:bg-gray-700">Add New Listings</a></li>
              </ul>
            )}
          </li>
          <li>
            <button 
              onClick={() => setCurrentContent('editProfile')} 
              className="w-full text-left p-4 hover:bg-gray-700"
            >
              Edit Profile
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentContent('changePassword')} 
              className="w-full text-left p-4 hover:bg-gray-700"
            >
              Change Password
            </button>
          </li>
          {/* Add more items as needed */}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button className="w-full text-left flex items-center p-4 hover:bg-gray-700">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;