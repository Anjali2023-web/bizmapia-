import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const SearchBarWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: 50px;
  outline: none;
  font-size: 16px;
  color: #333;
`;

const SearchButton = styled(motion.button)`
  background-color: #ff5a60;
  border: none;
  color: white;
  padding: 12px 18px;
  border-radius: 50px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
    // Handle search functionality here
  };

  return (
    <SearchBarWrapper
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="Search for products, brands and more..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
        >
          <FaSearch />
        </SearchButton>
      </InputWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
