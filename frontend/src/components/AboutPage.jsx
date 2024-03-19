import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hairSalon from "../images/hairSalon.jpeg";
import SpaImages from "../images/SpaImages.jpeg";

const images = [hairSalon, SpaImages, "image_url_3.jpg"];

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mb-20 border-gray-500">
      <div className="w-full h-[90px] bg-white"></div>
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="w-full lg:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-md p-6 lg:h-80 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p>
              Welcome to our wellness center, your haven for relaxation and
              rejuvenation. Experience soothing spa treatments, expert massages,
              personalized nutrition guidance, and stylish hair salon services
              all under one roof. Let us help you unwind, refresh, and feel your
              best from head to toe.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4 relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-full overflow-hidden"
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src={images[currentImageIndex]}
              alt={`Spa Image ${currentImageIndex + 1}`}
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-md p-6 lg:h-80 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Opening Hours</h2>
            <p>
              🕗 Monday to Sunday: 8:00 AM - 9:00 PM <br></br> Indulge in tranquility and
              pampering throughout the week, starting your day with rejuvenating
              treatments and unwinding until the evening. Our sanctuary awaits,
              ready to cater to your wellness needs at any hour.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
