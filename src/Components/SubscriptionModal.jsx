import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease forwards;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #333;  /* Set a solid background color */
  padding: 40px;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  color: #fff;
  text-align: center;
  position: relative;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  animation: ${slideIn} 0.5s ease forwards;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const OfferSection = styled.div`
  margin-bottom: 25px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

const OfferText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
  span {
    text-decoration: line-through;
    color: #f1c40f;
    margin: 0 5px;
    font-weight: 500;
  }
`;

const SubscribeButton = styled.button`
  background: linear-gradient(45deg, #f39c12, #e74c3c);
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CloseButton = styled.button`
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #e74c3c;
  }
`;

const SubscriptionModal = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();  // Initialize navigate

  const toggleModal = () => {
    navigate('/plans');  // Navigate to /plans
  };

  return (
    <>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <Heading>Exclusive Subscription Offers</Heading>

            <OfferSection>
              <OfferText>
                <strong>6 Months</strong>
                <span>Rs. 594/-</span>
                Rs. 499/- only
              </OfferText>
              <SubscribeButton>Subscribe for 6 Months</SubscribeButton>
            </OfferSection>

            <OfferSection>
              <OfferText>
                <strong>12 Months</strong>
                <span>Rs. 1188/-</span>
                Rs. 999/- only
              </OfferText>
              <SubscribeButton>Subscribe for 12 Months</SubscribeButton>
            </OfferSection>

            <CloseButton onClick={toggleModal}>No, Thanks</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default SubscriptionModal;
