import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const AdsList = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center py-4">
      <div className="w-full ">
        <motion.div
          ref={ref}
          className="overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://img.freepik.com/free-psd/banner-electronic-shop-template_23-2148785670.jpg?t=st=1721639299~exp=1721642899~hmac=b501933a12d012734fa2c84b3d30315e0bcf857aae68cf3a1bc9c753fadba4a9&w=1380"
            alt="Ad Image"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AdsList;
