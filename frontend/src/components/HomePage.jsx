import React, { useEffect } from "react";
import image2 from "../images/massagePhoto.avif";
import image1 from "../images/spa.jpg";
import image3 from "../images/steam.jpg";
import PopUp from "./PopUp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LazyLoad from "react-lazyload";

const HomePage = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [freezeImage, setFreezeImage] = useState(false);
  const backgroundImages = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(image1);
  const images = [image1, image2, image3];
  useEffect(() => {
    const interval = setInterval(() => {
      if (!freezeImage) {
        setBackgroundImage((prevImage) => {
          if (prevImage === image1) {
            return image2;
          } else if (prevImage === image2) {
            return image3;
          } else {
            return image1;
          }
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [freezeImage]);

  const handleBookNowClick = () => {
    setShowPopUp(true);
    setFreezeImage(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
    setFreezeImage(false);
  };

  const handleSubmitForm = () => {
    setShowPopUp(false);
  };

  return (
    <div>
      <div
        id="/"
        className="relative h-[730px] flex flex-col w-full bg-cover bg-center pb-10 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <>
          {isVisible && (
            <>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 50 }}
                transition={{ duration: 3 }}
                className="absolute top-1/4 left-1/4 transform -translate-x-1/2 text-white text-4xl  italic font-bold mb-5"
              >
                <h1> Welcome to Our Spa & Massage Center</h1>
              </motion.h1>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: -50 }}
                  transition={{ duration: 3 }}
                  className="absolute bottom-1/3 left-1/3 transform -translate-x-1/2 text-white text-2xl flex flex-col "
                >
                  Rejuvenate your body, mind, and soul.
                  <button
                    className=" bg-lime-900 text-white p-1 rounded-xl text-2xl my-7 w-52 mx-auto text-center hover:opacity-70 "
                    onClick={handleBookNowClick}
                    onSubmit={handleSubmitForm}
                  >
                    Book Now
                  </button>
                </motion.div>
              </div>
            </>
          )}
        </>
        {showPopUp && <PopUp onClose={handleClosePopUp} />}
      </div>
    </div>
  );
};

export default HomePage;
