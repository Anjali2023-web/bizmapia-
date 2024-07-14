import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p>
              We are a leading company in our industry with a wide range of products and services.
              Our mission is to provide the best quality and customer satisfaction.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">About</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">Email: info@popzup.in</p>
            <p className="mb-2">Phone: +91 8848 652 609</p>
            <p className="mb-2">Address:1st Floor Pulimoottil Arcade, Muvattupuzha Road, Thodupuzha, Idukki - 685584 (Opposite Adam Star Complex,Near Bhima Jewelry, Opp Adamstar Complex)</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 PopZup ,Powered by WePromote Business Solution</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
