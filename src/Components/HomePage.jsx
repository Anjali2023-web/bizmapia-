import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai'; // Import a close icon
import flagImage from '../assets/flag.png'; 

import Navbar from './Navbar';
import Hero from './Hero';
import TopCatagories from './TopCatagories';
import ConcernedLists from './ConcernedAds';
import TopLists from './TopLists';
import PopzupInfo from './About';
import Footer from './Footer';

import FloatingButton from './FloatingActionButton';
import Shop from './Shop';

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
  padding: 15px;
  border-radius: 15px;
  text-align: center;
  width: 90%;
  max-width: 350px;
  position: relative;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  background: linear-gradient(135deg, #f0f0f0, #ffffff);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CloseButton = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #888;

  &:hover {
    color: #ff3b3b;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;
  background-color: #f7f7f7;
`;

const Flag = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #fafafa;
`;

const CountryCode = styled.span`
  margin-left: 5px;
  margin-right: 10px;
  font-weight: bold;
`;

const PhoneInput = styled.input`
  padding: 12px;
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 14px;
`;

const GetStartedButton = styled.button`
  padding: 12px 24px;
  background-color: #1a73e8; /* Google blue */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #185abc;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #174ea0;
  }
`;

const Heading = styled.h2`
  font-size: 20px;
  font-family: 'Poppins', sans-serif; /* Attractive font */
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
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
      <div className="mt-20"></div> {/* This will add 8px of margin */}

      <ConcernedLists /><div className="mt-8"></div> {/* Concerned Ads first */}
      <TopCatagories /><div className="mt-8"></div> {/* Categories second */}
      <Hero /><div className="mt-8"></div> {/* Hero third */}
      <TopLists /><div className="mt-8"></div> {/* Top Listings fourth */}
      <Shop /><div className="mt-8"></div> {/* Shop section */}
      <PopzupInfo /><div className="mt-8"></div> {/* About fifth */}
      <Footer /><div className="mt-8"></div> {/* Footer */}
      
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
                <Heading>Enter Your Mobile Number</Heading>
                <InputContainer>
                  <Flag>
                    <img
                      src={flagImage}
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
