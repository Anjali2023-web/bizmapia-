import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tailwindcss/tailwind.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="flex flex-col items-center p-8 bg-gradient-to-br from-slate-100 via-gray-100 to-black-100">
      {/* Inject custom styles */}
      <style>{styles}</style>

      {/* Carousel Section */}
      <motion.div
        className="w-full max-w-6xl mt-4 relative"
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-5 hover:bg-opacity-100 text-purple-600 p-3 rounded-full transition duration-300"
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
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-5 hover:bg-opacity-100 text-purple-600 p-3 rounded-full transition duration-300"
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
                className="object-cover w-full"
              />
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      {item.title}
                    </h2>
                    <p className="text-lg sm:text-xl mb-6">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Carousel>
      </motion.div>

      <motion.div
        className="mt-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-purple-800 mb-4">
          OFFERS FOR YOU
        </h3>
      </motion.div>
    </div>
  );
};

const carouselItems = [
  {
    imageSrc: require("../assets/slider1.jpg"),
    
  },
  {
    imageSrc: require("../assets/slider2.jpg"),
    
  },
  {
    imageSrc: require("../assets/slider1.jpg"),
   
  },
];

export default App;
