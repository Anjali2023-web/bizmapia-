import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai'; // Import a close icon

import Navbar from './Navbar';
import Hero from './Hero';
import TopCatagories from './TopCatagories';
import ConcernedLists from './ConcernedAds';
import TopLists from './TopLists';
import PopzupInfo from './About';
import Footer from './Footer';
import CustomTabBar from './CustomTabBar';
import FloatingButton from './FloatingActionButton';

// Styled components for popup
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  width: 100%;
  position: relative;
`;

const CloseButton = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Flag = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
`;

const CountryCode = styled.span`
  margin-left: 5px;
  margin-right: 10px;
  font-weight: bold;
`;

const PhoneInput = styled.input`
  padding: 10px;
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 14px;
`;

const GetStartedButton = styled.button`
  padding: 10px 20px;
  background-color: #4285f4; /* Google blue */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #3367d6;
  }
`;

const HomePage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 5000); // Show popup after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    // Handle the get started action
    setIsPopupVisible(false); // Close the popup
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="bg-gradient-to-r from-slate-100 to-sky-100">
      <Navbar />
      
      {/* Add margin between Navbar and Hero section */}
      <div className="mt-8"></div> {/* This will add 8px of margin */}

      <Hero  /> <div className="mt-8"></div>{/* Adjust spacing here */}
      <TopCatagories /><div className="mt-8"></div>
      <ConcernedLists />
      <TopLists />
      <PopzupInfo />
      <Footer />
      <CustomTabBar />
      <FloatingButton />

      {/* The Popup */}
      <AnimatePresence>
        {isPopupVisible && (
          <Overlay>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <PopupContainer>
                <CloseButton onClick={handleClosePopup} />
                <h2>Enter Your Mobile Number</h2>
                <InputContainer>
                  <Flag>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                      alt="India Flag"
                      width="24"
                    />
                    <CountryCode>+91</CountryCode>
                  </Flag>
                  <PhoneInput type="text" placeholder="Enter Mobile No." />
                </InputContainer>
                <GetStartedButton onClick={handleGetStarted}>
                  Start Now →
                </GetStartedButton>
              </PopupContainer>
            </motion.div>
          </Overlay>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
