import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const keralaDistricts = [
  "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", 
  "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", 
  "Thiruvananthapuram", "Thrissur", "Wayanad"
];

const LocationSearchBar = ({ placeholder }) => {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleSearch = () => {
    console.log("Searching for places:", query);
    // Implement search logic here
  };

  const handleDropdownClick = (district) => {
    setSelectedDistrict(district);
    setQuery(district);
    setShowDropdown(false);
  };

  return (
    <div className="relative max-w-xs mx-auto">
      <div className="flex items-center">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          onFocus={() => setShowDropdown(true)}
          className="w-full p-3 pl-10 pr-12 border border-gray-300 rounded-full shadow-md bg-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
        <FaSearch className="absolute left-3 text-gray-600 text-lg cursor-pointer" onClick={handleSearch} />
        <FaMapMarkerAlt className="absolute right-3 text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition duration-300" />
      </div>

      {showDropdown && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto mt-1">
          {keralaDistricts.map((district, index) => (
            <div
              key={index}
              onClick={() => handleDropdownClick(district)}
              className="px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer"
            >
              {district}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearchBar;
