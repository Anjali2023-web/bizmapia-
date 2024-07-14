import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PopzupInfo = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once
        rootMargin: '-100px 0px', // Adjust to suit when you want the animation to start
    });

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div ref={ref} className={`bg-white shadow-md rounded-lg p-6 lg:flex lg:items-center lg:justify-between m-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="lg:w-2/3 lg:pr-8">
                <h2 className="text-3xl font-bold mb-4">Popzup for all local business, services, and stores nearby</h2>
                <p className="text-gray-700 mb-4 text-xl">Welcome to Popzup. Unlock new growth with Popzup advertising. Strategic advertising is a key to reaching your target audience and propelling your business forward. Popzup is a leading local search engine offering a powerful platform to connect with potential customers and elevate your brand presence.</p>

                <button onClick={toggleDetails} className="text-blue-500 hover:underline focus:outline-none">
                    Why Popzup?
                </button>
                {showDetails && (
                    <ul className="list-disc pl-6 mt-4 text-xl text-gray-700">
                        <li className="mb-2">Massive local reach: Tap into Popzup's vast network of users actively searching for business in your city.</li>
                        <li className="mb-2">Targeted Advertising: Reach the right audience by filtering based on location, category, and user interests.</li>
                        <li className="mb-2">Enhanced Visibility: Secure top placement in search results, maximizing your chances of being seen.</li>
                        <li className="mb-2">Flexible Advertising Options: Choose from featured listings, free listings, and more to suit your budget and goals.</li>
                    </ul>
                )}
            </div>
            <div className="mt-4 lg:mt-0 lg:w-1/3">
                <img src="https://wallpapers.com/images/high/white-wall-background-4ybie67o0c7ldrxs.webp" alt="Popzup Image" className="rounded-lg shadow-md lg:h-full lg:w-full object-cover" />
            </div>
        </div>
    );
};

export default PopzupInfo;
