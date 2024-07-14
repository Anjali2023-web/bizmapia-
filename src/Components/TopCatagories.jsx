import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FcElectronics } from "react-icons/fc";
import { FaCar, FaBriefcase, FaHome, FaToolbox } from "react-icons/fa";
import { MdTableBar } from "react-icons/md";

const categories = [
  { name: 'Electronics', icon: <FcElectronics className="text-black" /> },
  { name: 'Cars', icon: <FaCar className="text-black" /> },
  { name: 'Furniture', icon: <MdTableBar className="text-black" /> },
  { name: 'Jobs', icon: <FaBriefcase className="text-black" /> },
  { name: 'Real Estate', icon: <FaHome className="text-black" /> },
  { name: 'Services', icon: <FaToolbox className="text-black" /> },
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-mono drop-shadow-sm text-gray-900 font-bold text-center mb-8">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} icon={category.icon} name={category.name} />
        ))}
      </div>
    </div>
  );
};

const CategoryCard = ({ icon, name }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center bg-white/10 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-5xl mb-4 ">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
    </motion.div>
  );
};

export default Categories;
