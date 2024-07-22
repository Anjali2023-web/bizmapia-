import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
    { name: 'Twitter', icon: 'M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z' },
    { name: 'Instagram', icon: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-300">About Us</h2>
            <p className="text-gray-300 leading-relaxed">
              PopZup is a leading local search engine, connecting businesses with their target audience. Our mission is to empower local businesses and provide the best quality service and customer satisfaction.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Quick Links</h2>
            <ul className="space-y-2">
              {['Home', 'Services', 'Contact', 'About'].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Contact Us</h2>
            <p className="text-gray-300 mb-2">Email: info@popzup.in</p>
            <p className="text-gray-300 mb-2">Phone: +91 8848 652 609</p>
            <p className="text-gray-300">
              1st Floor Pulimoottil Arcade, Muvattupuzha Road, Thodupuzha, Idukki - 685584 
              <br />(Opposite Adam Star Complex, Near Bhima Jewelry)
            </p>
          </motion.div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-6 mb-4">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">{social.name}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>
          <motion.p 
            className="text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            &copy; {currentYear} PopZup | Powered by WePromote Business Solution
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;