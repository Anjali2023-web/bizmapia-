import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-br from-slate-100 via-gray-100 to-black-100 min-h-screen">
      <motion.h1
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-blue-600 mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      Ideas Ignited
      </motion.h1>
      
      <motion.div
        className="w-full max-w-lg mb-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search our collection..."
            className="w-full p-4 pl-12 border-2 border-purple-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300 bg-white text-lg"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-xl" />
        </div>
      </motion.div>
      
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={6000}
          transitionTime={1000}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          onChange={(index) => setActiveIndex(index)}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-5 hover:bg-opacity-100 text-purple-600 p-3 rounded-full transition duration-300 shadow-md">
                <FaChevronLeft className="text-2xl" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-5 hover:bg-opacity-100 text-purple-600 p-3 rounded-full transition duration-300 shadow-md">
                <FaChevronRight className="text-2xl" />
              </button>
            )
          }
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="object-cover w-full h-[600px]"
              />
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-12 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                    <p className="text-xl mb-6">{item.description}</p>
                    <motion.button
                      className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300 transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Collection
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Carousel>
      </motion.div>
      
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-purple-800 mb-4">Discover Our Latest Arrivals</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Indulge in the brilliance of our newest jewelry pieces, crafted to perfection for the modern connoisseur.
        </p>
      </motion.div>
    </div>
  );
};

const carouselItems = [
  {
    imageSrc: "https://www.khazanajewellery.com/wp-content/uploads/2016/06/HP_Banner_Slider-3.jpg",
    title: "Timeless Elegance",
    description: "Adorn yourself with our exquisite collection of handcrafted masterpieces.",
  },
  {
    imageSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b4322b71800111.5bd181970c91f.jpg",
    title: "Artistic Brilliance",
    description: "Each piece tells a unique story, blending tradition with contemporary design.",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1549213821-4708d624e1d1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Nature's Inspiration",
    description: "Experience the harmony of nature translated into stunning jewelry designs.",
  },
];

export default App;