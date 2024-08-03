import React, { useState } from 'react';
import { FaTaxi } from 'react-icons/fa';

const FloatingButton = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const handleClick = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="fixed bottom-4 right-4 w-14 h-14 bg-yellow-300 text-black rounded-full shadow-lg hover:bg-black hover:text-yellow-300 transition-colors duration-300 z-50 flex items-center justify-center"
      >
        <FaTaxi className="text-2xl" />
      </button>
      <div
        className={`fixed bottom-4 right-4 w-80 h-40 bg-black  border border-yellow-300 text-yellow-300 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out ${
          isPanelVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <p className="text-lg font-semibold">Coming Soon</p>
      </div>
    </div>
  );
};

export default FloatingButton;
