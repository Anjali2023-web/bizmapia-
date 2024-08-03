import React, { useState } from 'react';

const Logout = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    // Logic to handle logout, e.g., redirect to logout URL or call logout API
    alert('Logged out!');
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="logout-button">Logout</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogout} className="yes-button">Yes</button>
            <button onClick={() => setShowModal(false)} className="no-button">No</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .logout-button {
          padding: 12px 24px;
          margin: 5px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
          background-color: #007bff;
          color: white;
        }

        .logout-button:hover {
          background-color: #0056b3;
          color: #fff;
          transform: scale(1.05);
        }

        .modal {
          display: flex;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.5);
          justify-content: center;
          align-items: center;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: linear-gradient(135deg, #f0f0f0, #d9d9d9);
          border-radius: 10px;
          padding: 30px;
          border: 1px solid #ccc;
          width: 90%;
          max-width: 400px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          animation: scaleUp 0.3s ease;
        }

        .modal-content p {
          font-size: 18px;
          margin-bottom: 20px;
          color: #333;
        }

        .yes-button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #28a745;
          color: white;
          cursor: pointer;
          font-size: 16px;
          margin: 5px;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .yes-button:hover {
          background-color: #218838;
          transform: scale(1.05);
        }

        .no-button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #dc3545;
          color: white;
          cursor: pointer;
          font-size: 16px;
          margin: 5px;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .no-button:hover {
          background-color: #c82333;
          transform: scale(1.05);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Logout;
