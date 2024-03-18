import React from 'react';
import { motion } from 'framer-motion';

const SpaInfo = () => {
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-md p-6 lg:h-64 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p>Information about the spa and messages.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 lg:h-64 border border-gray-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="your_image_url_here" alt="Spa Image" className="max-w-full h-auto" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-md p-6 lg:h-64 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Opening Hours</h2>
            <p>Opening hours of the spa and massage.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaInfo;
