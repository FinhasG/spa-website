import React, { useState, useEffect } from "react";
import { FaTelegram, FaTiktok, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import Spa1 from "../images/Spa.mp4";
import Spa2 from "../images/Spa2.mp4";
import Spa3 from "../images/Spa3.mp4";
import PopUp from "./PopUp";
import "../App.css";

const HomePage = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [texts, setTexts] = useState([
    "Indulge in ultimate relaxation",
    "Experience tranquility",
    "Revitalize your senses",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const videos = [Spa1, Spa2, Spa3]; // Array of video sources
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHeader(true);
    }, 500); // Delay time for header animation

    const timeoutButton = setTimeout(() => {
      setShowButton(true);
    }, 2000); // Delay time for button animation

    // Change video, header, paragraph, and button every three seconds
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setVideoLoaded(false);
      setTimeout(() => {
        setVideoLoaded(true);
      }, 100);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeoutButton);
      clearInterval(videoInterval);
    };
  }, []);

  const handleBookNowClick = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const handleSubmitForm = (formData) => {
    // Implement form submission logic here
    setShowPopUp(false); // Close pop-up after form submission
    console.log(formData);
  };

  return (
    <div className="relative mb-20 bg-cover flex justify-center items-center h-screen ">
      <video
        key={videos[currentVideoIndex]}
        src={videos[currentVideoIndex]}
        className={`absolute inset-0 w-full h-full object-cover video-transition ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
      />
      <div className="absolute rounded-lg p-8 max-w-lg text-center">
        <h1
          className={`animated-header text-green-500 text-6xl font-bold mb-4 transition-all duration-1000 ${
            showHeader
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-20] mt-[-20]"
          }`}
          style={{ fontFamily: "Corinthia, sans-serif", fontWeight: "bolder" }}
        >
          {texts[currentIndex]}
        </h1>
        {/* <p className={"text-green-500 text-1xl font-bold"}>This is the time of the Spa</p> */}

        <button
          className={`bg-green-500 text-white px-20 py-2 rounded my-6 hover:bg-blue-600 transition-all duration-1000 ${
            showButton ? "opacity-100 rotate-0" : "opacity-0 rotate-[-90]"
          }`}
          onClick={handleBookNowClick}
          style={{
            transitionDelay: showButton ? "0.5s" : "0s",
            transformOrigin: "center",
          }}
        >
          Book Now
        </button>
        {showPopUp && (
          <PopUp onClose={handleClosePopUp} onClick={handleSubmitForm} />
        )}
      </div>
      {/* Social media icons */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
        <a href="#" className="text-white mx-2">
          <FaTelegram className="text-4xl hover:text-gray-400" />
        </a>
        <a href="#" className="text-white mx-2">
          <FaTiktok className="text-4xl hover:text-gray-400" />
        </a>
        <a href="#" className="text-white mx-2">
          <FaYoutube className="text-4xl hover:text-gray-400" />
        </a>
        <a href="#" className="text-white mx-2">
          <FaFacebook className="text-4xl hover:text-gray-400" />
        </a>
        <a href="#" className="text-white mx-2">
          <FaInstagram className="text-4xl hover:text-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
// import React, { useState, useEffect } from "react";
// import Spa from "../images/Spa.mp4";
// import PopUp from "./PopUp";
// import "../App.css";

// const HomePage = () => {
//   const [showPopUp, setShowPopUp] = useState(false);
//   const [texts, setTexts] = useState(["Indulge in ultimate relaxation"]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showButton, setShowButton] = useState(false);
//   const [showHeader, setShowHeader] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [texts]);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setShowHeader(true);
//     }, 500); // Delay time for header animation

//     const timeoutButton = setTimeout(() => {
//       setShowButton(true);
//     }, 2000); // Delay time for button animation

//     return () => {
//       clearTimeout(timeout);
//       clearTimeout(timeoutButton);
//     };
//   }, []);

//   const handleBookNowClick = () => {
//     setShowPopUp(true);
//   };

//   const handleClosePopUp = () => {
//     setShowPopUp(false);
//   };

//   const handleSubmitForm = (formData) => {
//     // Implement form submission logic here
//     setShowPopUp(false); // Close pop-up after form submission
//     console.log(formData);
//   };

//   return (
//     <div className="relative bg-cover flex justify-center items-center h-screen">
//       <video src={Spa} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted />
//       <div className="absolute rounded-lg p-8 max-w-lg text-center">
//         <h1
//           className={`animated-header text-green-500 text-6xl font-bold mb-4 transition-all duration-1000 ${
//             showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20] mt-[-20]'
//           }`}
//           style={{ fontFamily: 'Corinthia, sans-serif', fontWeight: 'bolder' }}
//         >
//           {texts[currentIndex]}
//         </h1>
//         <p>Thi si the time of the Spa</p>

//         <button
//           className={`bg-green-500 text-white px-20 py-2 rounded my-6 hover:bg-blue-600 transition-all duration-1000 ${
//             showButton ? 'opacity-100 rotate-0' : 'opacity-0 rotate-[-90]'
//           }`}
//           onClick={handleBookNowClick}
//           style={{ transitionDelay: showButton ? '0.5s' : '0s', transformOrigin: 'center' }}
//         >
//           Book Now
//         </button>
//         {showPopUp && <PopUp onClose={handleClosePopUp} onClick={handleSubmitForm} />}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from "react";
// import Spa from "../images/Spa.mp4";
// import PopUp from "./PopUp";
// import "../App.css";

// const HomePage = () => {
//   const [showPopUp, setShowPopUp] = useState(false);
//   const [texts, setTexts] = useState(["Indulge in ultimate relaxation", "rejuvenation at our luxurious spa"]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [texts]);

//   const handleBookNowClick = () => {
//     setShowPopUp(true);
//   };

//   const handleClosePopUp = () => {
//     setShowPopUp(false);
//   };

//   const handleSubmitForm = (formData) => {
//     // Implement form submission logic here
//     setShowPopUp(false); // Close pop-up after form submission
//     console.log(formData);
//   };

//   return (
//     <div className="relative bg-cover flex justify-center items-center h-screen">
//       <video src={Spa} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted />
//       <div className="absolute  rounded-lg p-8 max-w-lg text-center">
//         <h1 className={`animated-header text-green-500 text-6xl transition-all duration-1000 ${currentIndex === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}`} style={{ fontFamily: 'Corinthia, sans-serif',fontWeight: 'bolder' }}>{texts[currentIndex]}</h1>
//         <h1 className={`animated-header text-green-500 text-6xl font-bold mb-4 transition-all duration-1000 ${currentIndex === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`} style={{ fontFamily: 'Corinthia, sans-serif', fontWeight: 'bolder' }}>{texts[currentIndex]}</h1>

//         <button
//           className="bg-green-500 text-white px-20 py-2 rounded my-6 hover:bg-blue-600 transition-colors duration-1000"
//           onClick={handleBookNowClick}
//         >
//           Book Now
//         </button>
//         {showPopUp && <PopUp onClose={handleClosePopUp} onClick={handleSubmitForm} />}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React from "react";
// import Spa from "../images/Spa.mp4";
// import PopUp from "./PopUp";
// import { useState } from "react";

// const HomePage = () => {
//   const [showPopUp, setShowPopUp] = useState(false);

//   const handleBookNowClick = () => {
//     setShowPopUp(true);
//   };

//   const handleClosePopUp = () => {
//     setShowPopUp(false);
//   };

//   const handleSubmitForm = (formData) => {
//     // Implement form submission logic here
//     setShowPopUp(false); // Close pop-up after form submission
//     console.log(formData);
//   };

//   return (
//     <div className="relative bg-cover flex flex-col justify-center items-center min-h-screen m-2 ">
//       <video src={Spa} className="absolute inset-0 w-full h-auto object-cover z-0 rounded-lg" autoPlay loop muted />
//       <div className="relative z-10 bg-gray-200 bg-opacity-75 rounded-lg p-8 max-w-lg text-center">
//         <h5 className="animated-header text-xl md:text-2xl lg:text-3xl">Come and Visit Us</h5>
//         <h1 className="animated-header text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Sessions of Relaxation</h1>
//         <p className="mt-2 text-lg md:text-xl text-black font-semibold">
//           You owe yourself this moment, make it happen.
//         </p>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded mt-6 md:mt-8 hover:bg-blue-600 transition-colors duration-300"
//           onClick={handleBookNowClick}
//         >
//           Book Now
//         </button>
//         {showPopUp && <PopUp onClose={handleClosePopUp} onClick={handleSubmitForm} />}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// <div className="bg-gray-100 min-h-screen">
// <div id="/" className="relative bg-cover ">
//   <img src={image2} alt="Massage Room" className=" w-full h-[800px]" />
//   <div class="absolute top-20 left-10 right-0 px-4 py-2">
//     <h3 class="text-2xl text-white font-bold">
//       Welcome to Our Spa & Massage Center
//     </h3>
//     <p class="mt-2 text-lg text-black font-semibold w-[550px]">
//      <h5>Come and Visit Us</h5>
//      <h1>Sessions of Relaxation </h1>
//      <h6>you owe yourself this moment make it happ</h6>
//     </p>
//     <button
//       className="bg-blue-500 text-white px-4 py-2 rounded my-10 "
//       onClick={handleBookNowClick}
//       onSubmit={handleSubmitForm}
//     >
//       Book Now
//     </button>
//     {showPopUp && <PopUp onClose={handleClosePopUp} onClick={handleSubmitForm} />}
//   </div>
// </div>
