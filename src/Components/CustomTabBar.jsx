import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Replaced useHistory with useNavigate
import { FaHome, FaList, FaUser } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { motion } from 'framer-motion';
import './CustomTabBar.css'; // Assuming you have a CSS file for custom styles

const CustomTabBar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const routeNames = ['Home', 'Plans', 'Listings', 'User'];
  const icons = [<FaHome />, <MdOutlineAttachMoney />, <FaList />, <FaUser />];
  const routes = ['/', '/plans', '/listings', '/register'];

  useEffect(() => {
    // Check if user navigated away from /plans
    if (location.pathname !== '/plans' && location.state?.from === '/plans') {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <div className="tab-bar">
      {routeNames.map((name, index) => (
        <Link key={index} to={routes[index]} className="tab-item">
          <motion.div
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: location.pathname === routes[index] ? 20 : 0 }}
            transition={{ duration: 0.5, repeat: location.pathname === routes[index] ? 2 : 0, repeatType: 'reverse' }}
          >
            {icons[index]}
          </motion.div>
          <p>{name}</p>
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            animate={{ width: location.pathname === routes[index] ? '100%' : '0%' }}
            transition={{ duration: 0.5 }}
          />
        </Link>
      ))}
    </div>
  );
};

export default CustomTabBar;
