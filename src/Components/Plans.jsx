import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const PricingSection = styled.section`
  display: flex;
  flex-direction: column; // Column layout to accommodate Navbar
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: 60px; // Space between Navbar and PricingCard
  background: url('https://media.istockphoto.com/id/1049658912/photo/business-investment-growth.jpg?s=612x612&w=0&k=20&c=lLwPbgGg8uKgrAiIN1mC4ATrM8f3Czm8YSCEEJ3TWik=') no-repeat center center;
  background-size: cover;
  position: relative;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 50px; // Adjust space for mobile view
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-top: 40px; // Adjust space for extra small screens
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
`;

const PricingCard = styled(motion.div)`
  background-color: #ffffff;
  color: #4b2e2a;
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  text-align: center;
  width: 300px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  z-index: 2;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) { /* Tablet view */
    width: 80%;
  }

  @media (max-width: 768px) { /* Mobile view */
    width: 90%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) { /* Extra small screens */
    width: 100%;
    padding: 1rem;
    margin: 0.5rem;
  }
`;

const PriceTag = styled.h2`
  font-size: 2rem;
  color: #8b5e3c;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  color: #4b2e2a;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const FeatureItem = styled.li`
  margin: 0.5rem 0;
  color: ${(props) => (props.included ? "#4b8b3b" : "#a73d2d")};
`;

const BuyButton = styled.button`
  background-color: #8b5e3c;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #6f4f28;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;
  }
`;

const BreakpointWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const plans = [
  {
    name: "99 Basic Business Listing Pack",
    price: "₹99 / Monthly",
    features: [
      { name: "Listing (1)", included: true },
      { name: "Image Per Listing (1)", included: true },
      { name: "Listing Enquiry Form", included: true },
      { name: "Video", included: false },
      { name: "Amenities Per Listing", included: false },
      { name: "Social Link Per Listing", included: false },
      { name: "FAQ Per Listing", included: false },
      { name: "Business Hours", included: false },
      { name: "WhatsApp", included: false },
      { name: "TeleGram", included: false },
      { name: "TawkTo", included: false },
    ],
  },
  {
    name: "299 Business Listing Plan",
    price: "₹299 / Monthly",
    features: [
      { name: "Listing (5)", included: true },
      { name: "Image Per Listing (3)", included: true },
      { name: "Listing Enquiry Form", included: true },
      { name: "Video", included: true },
      { name: "Amenities Per Listing (5)", included: true },
      { name: "Social Link Per Listing (5)", included: true },
      { name: "FAQ Per Listing (5)", included: true },
      { name: "Business Hours", included: true },
      { name: "WhatsApp", included: true },
      { name: "TeleGram", included: true },
      { name: "TawkTo", included: true },
    ],
  },
  {
    name: "799 Business Listing Plan",
    price: "₹799 / Monthly",
    features: [
      { name: "Listing (5)", included: true },
      { name: "Image Per Listing (10)", included: true },
      { name: "Listing Enquiry Form", included: true },
      { name: "Video", included: true },
      { name: "Amenities Per Listing (10)", included: true },
      { name: "Social Link Per Listing (10)", included: true },
      { name: "FAQ Per Listing (10)", included: true },
      { name: "Business Hours", included: true },
      { name: "WhatsApp", included: true },
      { name: "TeleGram", included: true },
      { name: "TawkTo", included: true },
    ],
  },
];

const PricingTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleBuyClick = (planIndex) => {
    setLoading(true);
    setTimeout(() => {
      if (planIndex === 0) {
        navigate("/offer");
      } else if (planIndex === 1) {
        navigate("/offers");
      } else if (planIndex === 2) {
        navigate("/offerss");
      }
    }, 500); // simulate loading time
  };

  useEffect(() => {
    const handleBackButton = () => {
      setLoading(true);
      setTimeout(() => {
        navigate('/');
      }, 500); // simulate loading time
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <Navbar /> {/* Add Navbar at the top */}
      <PricingSection>
        <Overlay />
        <BreakpointWrapper>
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <PlanName>{plan.name}</PlanName>
              <PriceTag>{plan.price}</PriceTag>
              <FeatureList>
                {plan.features.map((feature, i) => (
                  <FeatureItem key={i} included={feature.included}>
                    {feature.name}
                  </FeatureItem>
                ))}
              </FeatureList>
              <BuyButton onClick={() => handleBuyClick(index)}>Buy Now</BuyButton>
            </PricingCard>
          ))}
        </BreakpointWrapper>
      </PricingSection>
    </>
  );
};

export default PricingTable;
