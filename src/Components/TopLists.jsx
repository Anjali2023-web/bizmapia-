import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; // Import filled heart icon
import Navbar from './Navbar'; // Ensure this path is correct

const TopLists = () => {
  const cardsData = [
    {
      title: 'Elegant Jewelry',
      description: 'Explore our exclusive collection of elegant jewelry designed to make you stand out.',
      image: 'https://retailjewellerindia.com/wp-content/uploads/RJIndia-Website-Cover-image-1200-X-675px-Jos-Alukka-1808-2048x1152.jpg',
      rating: 4,
      location: 'New York, USA',
    },
    {
      title: 'Luxurious Watches',
      description: 'Discover the finest watches that combine luxury and precision.',
      image: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/HP_Banner_Slider-3.jpg',
      rating: 5,
      location: 'Los Angeles, USA',
    },
    {
      title: 'Modern Art Pieces',
      description: 'Add a touch of modern art to your space with our curated selection.',
      image: 'https://www.spyne.ai/blogs/wp-content/uploads/2023/02/Untitled-1-copy-1-1-1024x576.webp',
      rating: 3,
      location: 'Chicago, USA',
    },
    {
      title: 'Luxury Cars',
      description: 'Experience the thrill of driving the latest luxury cars.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b4322b71800111.5bd181970c91f.jpg',
      rating: 4,
      location: 'Houston, USA',
    },
    {
      title: 'Premium Beverages',
      description: 'Savor the taste of our premium beverages crafted to perfection.',
      image: 'https://gumlet-images.assettype.com/afaqs%2F2023-12%2F85dda5bf-0bf7-43af-a30f-7ae3a7b2dd8f%2FBisleri__DrinkItUp_Deepika_Padukone.png?rect=79%2C0%2C1778%2C1000&w=1200&auto=format%2Ccompress&ogImage=true',
      rating: 2,
      location: 'Miami, USA',
    },
    {
      title: 'Designer Clothing',
      description: 'Upgrade your wardrobe with our collection of designer clothing.',
      image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024',
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
