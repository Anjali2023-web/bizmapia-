import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Navbar from './Navbar'; // Ensure this path is correct
import algaImage from '../assets/alga.jpeg.jpg';
import DreamImage from '../assets/Dream.jpg'; 
import jaicoImage from '../assets/Jaico.jpeg.jpg';// Import the image directly
import kandirikalImage from '../assets/Kandirikal.jpeg.jpg';
import mattechImage from '../assets/Mattech.jpeg.jpg';
import swissImage from '../assets/Swiss360.jpeg.jpg';


const TopLists = () => {
  const cardsData = [
    {
      title: 'Elegant Jewelry',
      description: 'Explore our exclusive collection of elegant jewelry designed to make you stand out.',
      image: algaImage, // Reference the imported image here
      rating: 4,
      location: 'New York, USA',
    },
    {
      title: 'Luxurious Watches',
      description: 'Discover the finest watches that combine luxury and precision.',
      image: DreamImage,
      rating: 5,
      location: 'Los Angeles, USA',
    },
    {
      title: 'Modern Art Pieces',
      description: 'Add a touch of modern art to your space with our curated selection.',
      image:jaicoImage ,
      rating: 3,
      location: 'Chicago, USA',
    },
    {
      title: 'Luxury Cars',
      description: 'Experience the thrill of driving the latest luxury cars.',
      image: kandirikalImage,
      rating: 4,
      location: 'Houston, USA',
    },
    {
      title: 'Premium Beverages',
      description: 'Savor the taste of our premium beverages crafted to perfection.',
      image: mattechImage,
      location: 'Miami, USA',
    },
    {
      title: 'Designer Clothing',
      description: 'Upgrade your wardrobe with our collection of designer clothing.',
      image: swissImage,
      rating: 5,
      location: 'San Francisco, USA',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-12">
        <div className="text-center mb-8">
          <motion.h1
            className="text-3xl sm:text-4xl font-sans font-bold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Trending In Your Area
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              rating={card.rating}
              location={card.location}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Card = ({ title, description, image, rating, location }) => {
  const [isInWishlist, setIsInWishlist] = useState(false); // State for wishlist
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="shadow-lg rounded-lg overflow-hidden relative transform transition-transform hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <button
        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        onClick={() => setIsInWishlist(!isInWishlist)}
      >
        {isInWishlist ? (
          <AiFillHeart className="text-red-500" />
        ) : (
          <AiOutlineHeart className="text-gray-500" />
        )}
      </button>
      <div className="p-4 bg-white border-t border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }, (_, i) => (
            i < rating ? (
              <AiFillStar key={i} className="text-yellow-400" />
            ) : (
              <AiOutlineStar key={i} className="text-yellow-400" />
            )
          ))}
        </div>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </motion.div>
  );
};

export default TopLists;
