import React from 'react';

function Topbar() {
  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-semibold">Hi John Kalathiparambil</div>
      <div className="flex items-center space-x-4">
        {/* <button className="p-2 bg-gray-600 rounded hover:bg-gray-500">Notifications</button> */}
        <img 
          src="https://cdn5.vectorstock.com/i/1000x1000/43/04/avatar-social-media-isolated-icon-design-vector-10704304.jpg" 
          alt="Profile" 
          className="w-10 h-10 rounded-full object-cover cursor-pointer hover:opacity-80"
        />
      </div>
    </div>
  );
}

export default Topbar;
