import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/register');
  };

  return (
    <div>
      <button
        onClick={handleNavigate}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Go to Registration
      </button>
    </div>
  );
};

export default User;
