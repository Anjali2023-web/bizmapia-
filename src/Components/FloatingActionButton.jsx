import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTaxi } from 'react-icons/fa';

const FloatingButton = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsPanelVisible(!isPanelVisible);
    // Navigate to the "coming-soon" page
    navigate('/soon');
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="floating-button"
      >
        <FaTaxi className="text-2xl" />
      </button>
      <div
        className={`panel ${
          isPanelVisible ? 'panel-visible' : 'panel-hidden'
        }`}
      >
        <b><p className="text-lg font-semibold">COMING SOON</p></b>
      </div>

      {/* Inline styles for keyframes and bounce animation */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
        .floating-button {
          position: fixed;
          bottom: 16px;
          right: 16px;
          width: 56px;
          height: 56px;
          background-color: #f39c12;
          color: #ffffff;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          animation: bounce 2s infinite;
          transition: background-color 0.3s ease, color 0.3s ease;
          z-index: 50;
        }
        .floating-button:hover {
          background-color: #000000;
          color: #f39c12;
        }
        .panel {
          position: fixed;
          bottom: 16px;
          right: 16px;
          width: 320px;
          height: 160px;
          background-color: #000000;
          border: 1px solid #f39c12;
          color: #f39c12;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        .panel-hidden {
          transform: translateY(100%);
          opacity: 0;
        }
        .panel-visible {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default FloatingButton;
