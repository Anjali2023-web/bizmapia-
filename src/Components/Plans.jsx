import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const PricingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  margin-top: 60px;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  position: relative;
  min-height: 100vh;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  z-index: 1;
`;

const PricingCard = styled(motion.div)`
  background: #fff;
  color: #333;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  margin: 1.5rem;
  text-align: center;
  width: 350px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  z-index: 2;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1.5rem;
    margin: 1rem;
  }
`;

const PriceTag = styled.h2`
  font-size: 2.5rem;
  color: #e94e77;
  margin: 1.5rem 0;
  background: linear-gradient(to right, #e94e77, #f27121);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const PlanName = styled.h3`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0 2rem 0;
`;

const FeatureItem = styled.li`
  margin: 0.75rem 0;
  color: ${(props) => (props.included ? "#27ae60" : "#e74c3c")};
  font-size: 1.1rem;
  font-weight: 500;
  text-align: left;
`;

const BuyButton = styled.button`
  background: linear-gradient(to right, #f27121, #e94e77);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  transition: background 0.3s ease-in-out, transform 0.2s ease;

  &:hover {
    background: linear-gradient(to right, #e94e77, #f27121);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.6rem;
  }
`;

const BreakpointWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 2;
`;

const HomeButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: #6a11cb; /* Match your design scheme */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 3;

  &:hover {
    background: #2575fc; /* Slightly lighter for hover effect */
  }
`;

const plans = [
  {
    name: "Basic Plan",
    price: "₹99 / Monthly",
    features: [
      { name: "Verified Business (Name turns blue and shows tick icon)", included: true },
      { name: "Location (Accessible through Google Maps)", included: true },
      { name: "Phone Number Active (Customer can dial)", included: true },
      { name: "Profile Photo Upload", included: true },
      { name: "Cover Image Upload (1 free)", included: true },
      { name: "Featured Image Post (₹49 for 7 days)", included: true },
      { name: "Featured Video Post (₹99 for 7 days)", included: true },
    ],
  },
  {
    name: "Premium Plan",
    price: "₹299 / Monthly",
    features: [
      { name: "Verified Business (Name turns blue and shows tick icon)", included: true },
      { name: "Location (Accessible through Google Maps)", included: true },
      { name: "Phone Number Active (Customer can dial)", included: true },
      { name: "Profile Photo Upload", included: true },
      { name: "Cover Image Upload (1 free)", included: true },
      { name: "Gallery Images (4 free)", included: true },
      { name: "Website Address Sharing", included: true },
      { name: "Featured Images (2)", included: true },
      { name: "Featured Image Post (₹49 for 7 days)", included: true },
      { name: "Featured Video Post (₹99 for 7 days)", included: true },
    ],
  },
  {
    name: "Ultra Premium Plan",
    price: "₹799 / Monthly",
    features: [
      { name: "Verified Business (Name turns blue and shows tick icon)", included: true },
      { name: "Location (Accessible through Google Maps)", included: true },
      { name: "Phone Number Active (Customer can dial)", included: true },
      { name: "Profile Photo Upload", included: true },
      { name: "Cover Image Upload (1 free)", included: true },
      { name: "Gallery Images (4 free)", included: true },
      { name: "Website Address Sharing", included: true },
      { name: "Featured Images (4)", included: true },
      { name: "Featured Video (1)", included: true },
      { name: "Lead Generation on Category Searches", included: true },
      { name: "Social Media Integration", included: true },
      { name: "Featured Image Post (₹49 for 7 days)", included: true },
      { name: "Featured Video Post (₹99 for 7 days)", included: true },
    ],
  },
];

const PricingTable = () => {
  const navigate = useNavigate();
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
    }, 500);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const handleBackButton = () => {
      setLoading(true);
      setTimeout(() => {
        navigate('/');
      }, 500);
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <Navbar />
      <PricingSection>
        <Overlay />
        <HomeButton onClick={handleHomeClick}>Home</HomeButton>
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
