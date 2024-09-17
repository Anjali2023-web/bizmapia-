    // Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const performLogout = async () => {
      logout();
      navigate('/register');
    };

    performLogout();
  }, [navigate, logout]);

  return null; // You can add a loading spinner or message if needed
};

export default Logout;
