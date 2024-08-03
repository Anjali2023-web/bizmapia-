import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FcElectronics } from "react-icons/fc";
import { FaCar, FaBriefcase, FaHome, FaToolbox } from "react-icons/fa";
import { MdTableBar } from "react-icons/md";

const categories = [
  { name: 'Electronics', icon: <FcElectronics />, color: 'from-gray-800 to-gray-900' },
  { name: 'Cars', icon: <FaCar />, color: 'from-blue-900 to-indigo-900' },
  { name: 'Furniture', icon: <MdTableBar />, color: 'from-purple-900 to-indigo-900' },
  { name: 'Jobs', icon: <FaBriefcase />, color: 'from-green-900 to-teal-900' },
  { name: 'Real Estate', icon: <FaHome />, color: 'from-red-900 to-pink-900' },
  { name: 'Services', icon: <FaToolbox />, color: 'from-yellow-800 to-orange-900' },
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16 bg-gradient-to-b from-gray-900 to-black">
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Popular Categories
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} index={index} />
        ))}
      </div>
    </div>
  );
};

const CategoryCard = ({ icon, name, color, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden bg-gradient-to-br ${color}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="text-4xl sm:text-5xl mb-2 sm:mb-4 text-gray-200"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 360 }}
        whileTap={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-sm sm:text-lg font-semibold text-gray-200 text-center">{name}</h3>
    </motion.div>
  );
};

export default Categories;