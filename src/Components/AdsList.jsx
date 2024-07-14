import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const AdsList = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-6xl">
        <motion.div
          ref={ref}
          className="overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e7eaf7501b2e061b53d2525/1632326248580-IBNQ1ADUXV694K76BXGU/Blog+Post_Title+Banners+%2811%29.png?format=1500w"
            alt="Ad Image"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AdsList;
