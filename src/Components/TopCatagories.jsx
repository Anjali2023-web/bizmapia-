import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Sample icons
const categories = [
  { name: 'Restaurants', icon: '🍽️', color: 'bg-orange-200' },
  { name: 'Hotels', icon: '🏨', color: 'bg-blue-200' },
  { name: 'Beauty Spa', icon: '💆', color: 'bg-pink-200' },
  { name: 'Home Decor', icon: '🛋️', color: 'bg-teal-200' },
  { name: 'Wedding Planning', icon: '👰', color: 'bg-yellow-200' },
  { name: 'Education', icon: '🎓', color: 'bg-purple-200' },
  { name: 'Rent & Hire', icon: '🔧', color: 'bg-red-200' },
  { name: 'Hospitals', icon: '🏥', color: 'bg-blue-200' },
  { name: 'Contractors', icon: '👷', color: 'bg-yellow-200' },
  { name: 'Pet Shops', icon: '🐕', color: 'bg-teal-200' },
  { name: 'PG/Hostels', icon: '🏠', color: 'bg-green-200' },
  { name: 'Estate Agent', icon: '🏘️', color: 'bg-orange-200' },
  { name: 'Dentists', icon: '🦷', color: 'bg-purple-200' },
  { name: 'Gym', icon: '🏋️', color: 'bg-red-200' },
  { name: 'Consultants', icon: '💼', color: 'bg-blue-200' },
  { name: 'Event Organisers', icon: '🎉', color: 'bg-yellow-200' },
  { name: 'Driving Schools', icon: '🚗', color: 'bg-teal-200' },
  { name: 'Packers & Movers', icon: '🚛', color: 'bg-green-200' },
  { name: 'Courier Service', icon: '📦', color: 'bg-gray-200' }
];

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`;

const CategoryItem = styled(motion.div)`
  text-align: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  font-size: 40px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const CategoryName = styled.div`
  font-size: 14px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const PopularButton = styled(motion.button)`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Categories = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/cat');
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16 bg-gray-50">
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Popular Categories
      </motion.h2>
      <CategoriesContainer>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <IconContainer>{category.icon}</IconContainer>
            <CategoryName>{category.name}</CategoryName>
          </CategoryItem>
        ))}
      </CategoriesContainer>
      <ButtonContainer>
        <PopularButton
          onClick={handleButtonClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Popular Categories
        </PopularButton>
      </ButtonContainer>
    </div>
  );
};

export default Categories;
