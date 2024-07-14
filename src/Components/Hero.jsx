import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';
import 'animate.css/animate.min.css';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded mb-4 animate__animated animate__fadeIn bg-transparent"
        />
      </motion.div>
      <motion.div
        className="w-[100%] max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          className="animate__animated animate__fadeIn"
        >
          <div>
            <img
              src="https://www.khazanajewellery.com/wp-content/uploads/2016/06/HP_Banner_Slider-3.jpg"
              alt="Image 2"
              className="object-cover h-auto w-full"
            />
          </div>
          <div>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b4322b71800111.5bd181970c91f.jpg"
              alt="Image 1"
              className="object-cover h-auto w-full"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1549213821-4708d624e1d1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 3"
              className="object-cover h-auto w-full"
            />
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default App;
