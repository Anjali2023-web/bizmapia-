import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectToRegistration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/register'); // Redirect to RegistrationForm
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default RedirectToRegistration;
