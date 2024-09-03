import React, { useRef, useState } from 'react'; // Import useRef and useState from React
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { useInView } from 'framer-motion'; // Import useInView from framer-motion
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; // 
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
    {
      title: 'Top List 4',
      description: 'This is the description for card 4.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b4322b71800111.5bd181970c91f.jpg',
      rating: 4,
      location: 'Houston, USA',
      productOwner: 'Bob Brown'
    },
    {
      title: 'Top List 5',
      description: 'This is the description for card 5.',
      image: 'https://gumlet-images.assettype.com/afaqs%2F2023-12%2F85dda5bf-0bf7-43af-a30f-7ae3a7b2dd8f%2FBisleri__DrinkItUp_Deepika_Padukone.png?rect=79%2C0%2C1778%2C1000&w=1200&auto=format%2Ccompress&ogImage=true',
      rating: 2,
      location: 'Miami, USA',
      productOwner: 'Charlie Davis'
    },
    {
      title: 'Top List 6',
      description: 'This is the description for card 6.',
      image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024',
      rating: 5,
      location: 'San Francisco, USA',
      productOwner: 'Eve Miller'
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