import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PopzupInfo = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-xl p-8 lg:flex lg:items-center lg:justify-between m-8 overflow-hidden"
        >
            <div className="lg:w-2/3 lg:pr-12">
                <h2 className="text-4xl font-extrabold mb-6 text-slate-800 leading-tight">BisMapia: Elevate Your Local Business Presence</h2>
                <p className="text-gray-700 mb-6 text-xl leading-relaxed">
                    Welcome to BisMapia – your gateway to unparalleled local advertising. Harness the power of strategic promotion to connect with your target audience and catapult your business to new heights. As a premier local search engine, Popzup offers a robust platform to engage potential customers and amplify your brand's visibility.
                </p>

                <motion.button 
                    onClick={toggleDetails}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-slate-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
                >
                    {showDetails ? "Hide Details" : "Why Choose BisMapia?"}
                </motion.button>
                
                {showDetails && (
                    <motion.ul 
                        className="mt-6 space-y-4 text-lg text-gray-700"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        {[
                            "Massive Local Reach: Tap into BisMapia's vast network of users actively searching for businesses in your city.",
                            "Targeted Advertising: Reach the right audience with precision filtering based on location, category, and user interests.",
                            "Enhanced Visibility: Secure top placement in search results, maximizing your chances of being seen.",
                            "Flexible Advertising Options: Choose from featured listings, free listings, and more to suit your budget and goals."
                        ].map((item, index) => (
                            <motion.li 
                                key={index}
                                variants={listItemVariants}
                                className="flex items-start"
                            >
                                <svg className="w-6 h-6 text-slate-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/3">
                <motion.img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                    alt="Local Business Growth" 
                    className="rounded-xl shadow-md w-full h-auto object-cover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
            </div>
        </motion.div>
    );
};

export default PopzupInfo;