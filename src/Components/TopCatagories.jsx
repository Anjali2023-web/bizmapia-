import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Sample categories
const categories = [
  { name: 'Restaurants', icon: '🍽️' },
  { name: 'Hotels', icon: '🏨' },
  { name: 'Beauty Spa', icon: '💆' },
  { name: 'Home Decor', icon: '🛋️' },
  { name: 'Wedding Planning', icon: '👰' },
  { name: 'Education', icon: '🎓' },
  { name: 'Rent & Hire', icon: '🔧' },
  { name: 'Hospitals', icon: '🏥' },
  { name: 'Contractors', icon: '👷' },
  { name: 'Pet Shops', icon: '🐕' },
  { name: 'PG/Hostels', icon: '🏠' },
  { name: 'Estate Agent', icon: '🏘️' },
  { name: 'Dentists', icon: '🦷' },
  { name: 'Gym', icon: '🏋️' },
  { name: 'Consultants', icon: '💼' },
  { name: 'Event Organisers', icon: '🎉' },
  { name: 'Driving Schools', icon: '🚗' },
  { name: 'Packers & Movers', icon: '🚛' },
  { name: 'Courier Service', icon: '📦' }
];

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Reduced gap between categories */
  padding: 20px;
  justify-content: center;
`;

const CategoryItem = styled(motion.div)`
  text-align: center;
  padding: 8px; /* Reduced padding */
  background-color: #fff;
  border-radius: 8px; /* Reduced border-radius */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Slightly smaller shadow */
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  flex: 0 1 6%; /* Reduced width to fit more categories in one line */
  
  &:hover {
    transform: translateY(-3px); /* Slightly smaller hover effect */
  }
`;

const IconContainer = styled.div`
  font-size: 24px; /* Reduced icon size */
  margin-bottom: 5px; /* Reduced margin */
`;

const CategoryName = styled.div`
  font-size: 10px; /* Reduced font size */
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ToggleButton = styled(motion.button)`
  padding: 8px 16px; /* Slightly smaller button */
  font-size: 14px; /* Reduced button font size */
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 20px; /* Reduced border-radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Categories = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        className="text-2xl font-bold text-center mb-8 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Popular Categories
      </motion.h2>
      
      <CategoriesContainer>
        {categories.slice(0, showMore ? categories.length : 13).map((category, index) => (
          <CategoryItem
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            <IconContainer>{category.icon}</IconContainer>
            <CategoryName>{category.name}</CategoryName>
          </CategoryItem>
        ))}
      </CategoriesContainer>
      
      <ButtonContainer>
        <ToggleButton
          onClick={handleToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </ToggleButton>
      </ButtonContainer>
    </div>
  );
};

export default Categories;
