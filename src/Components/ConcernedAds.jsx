import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import the regular heart icon for not selected state
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; // Ant Design for the rating stars

const TopLists = () => {
  const cardsData = [
    {
      title: 'Top List 1',
      description: 'This is the description for card 1.',
      image: 'https://retailjewellerindia.com/wp-content/uploads/RJIndia-Website-Cover-image-1200-X-675px-Jos-Alukka-1808-2048x1152.jpg',
      rating: 4,
      location: 'New York, USA',
      productOwner: 'John Doe'
    },
    {
      title: 'Top List 2',
      description: 'This is the description for card 2.',
      image: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/HP_Banner_Slider-3.jpg',
      rating: 5,
      location: 'Los Angeles, USA',
      productOwner: 'Jane Smith'
    },
    {
      title: 'Top List 3',
      description: 'This is the description for card 3.',
      image: 'https://www.spyne.ai/blogs/wp-content/uploads/2023/02/Untitled-1-copy-1-1-1024x576.webp',
      rating: 3,
      location: 'Chicago, USA',
      productOwner: 'Alice Johnson'
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:m-20">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            rating={card.rating}
            location={card.location}
            productOwner={card.productOwner}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, description, image, rating, location, productOwner }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [isWishlisted, setIsWishlisted] = useState(false); // State to handle wish list toggle

  return (
    <motion.div
      ref={ref}
      className="bg-white/10 shadow-md rounded-lg overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        {isWishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-500" />}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-900">{description}</p>
        <div className="flex items-center my-2">
          {Array.from({ length: 5 }, (_, i) => (
            i < rating ? <AiFillStar key={i} className="text-yellow-500" /> : <AiOutlineStar key={i} className="text-yellow-500" />
          ))}
        </div>
        <p className="text-gray-600">{location}</p>
        <p className="text-gray-600">Product Owner: {productOwner}</p>
      </div>
    </motion.div>
  );
};

export default TopLists;
