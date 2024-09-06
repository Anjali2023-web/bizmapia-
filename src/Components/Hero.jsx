import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Inline styles for custom media queries
const styles = `
  @media all and (max-width: 1280px) {
    .text-2xl { font-size: 1.5rem; }
  }
  @media all and (max-width: 1080px) {
    .text-2xl { font-size: 1.25rem; }
  }
  @media all and (max-width: 980px) {
    .text-xl { font-size: 1.125rem; }
    .h-[400px] { height: 300px; }
  }
  @media all and (max-width: 768px) {
    .text-lg { font-size: 1rem; }
    .h-[400px] { height: 250px; }
  }
  @media all and (max-width: 640px) {
    .text-lg { font-size: 0.875rem; }
  }
  @media all and (max-width: 480px) {
    .text-base { font-size: 0.75rem; }
    .h-[400px] { height: 200px; }
  }
  @media all and (max-width: 360px) {
    .text-sm { font-size: 0.625rem; }
  }
  @media all and (max-width: 320px) {
    .text-xs { font-size: 0.5rem; }
  }
`;

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-br from-slate-100 via-gray-100 to-black-100 min-h-screen">
      
      {/* Inject custom styles */}
      <style>{styles}</style>
      
      {/* Carousel Section */}
      <motion.div
        className="w-full max-w-6xl mt-4 relative" // Reduced margin-top from mt-10 to mt-4
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={6000}
          transitionTime={1000}
          onChange={(index) => setActiveIndex(index)}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-5 hover:bg-opacity-100 text-purple-600 p-3 rounded-full transition duration-300 shadow-md"
              >
                <FaChevronLeft className="text-2xl" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-5 hover:bg-opacity-100 text-purple-600 p-3 rounded-full transition duration-300 shadow-md"
              >
                <FaChevronRight className="text-2xl" />
              </button>
            )
          }
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.imageSrc}
                alt={`Slide ${index}`}
                className="object-cover w-full h-[400px] md:h-[300px] sm:h-[250px]" // Adjusted height for responsiveness
              />
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-4 sm:p-6 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{item.title}</h2>
                    <p className="text-lg sm:text-xl mb-6">{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Carousel>
      </motion.div>

      <motion.div
        className="mt-3 text-center" // Reduced margin-top from mt-10 to mt-4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-purple-800 mb-4">OFFERS FOR YOU</h3>
        
      </motion.div>
    </div>
  );
};

const carouselItems = [
  {
    imageSrc: "https://www.khazanajewellery.com/wp-content/uploads/2016/06/HP_Banner_Slider-3.jpg",
    
  },
  {
    imageSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b4322b71800111.5bd181970c91f.jpg",
   
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1549213821-4708d624e1d1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
];

export default App;
