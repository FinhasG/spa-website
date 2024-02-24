import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/spa.jpg";
import PopUp from "./PopUp";
import { useState } from "react";

const HomePage = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleBookNowClick = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const handleSubmitForm = () => {
    // Implement form submission logic here
    setShowPopUp(false); // Close pop-up after form submission
  };

  return (
    // <div className="bg-gray-100 min-h-screen">
    <div id="/" className="relative bg-cover ">
      <img src={image2} alt="Massage Room" className=" w-full h-[660px]" />
      <div class="absolute top-20 left-10 right-0 px-4 py-2">
        <h3 class="text-2xl text-white font-bold">
          Welcome to Our Spa & Massage Center
        </h3>
        <p class="mt-2 text-lg text-black font-semibold w-[550px]">
          Some description text. Some dummy text here. Welcome to Sling Academy.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded my-10 "
          onClick={handleBookNowClick}
          onSubmit={handleSubmitForm}
        >
          Book Now
        </button>
        {showPopUp && <PopUp onClose={handleClosePopUp} />}
      </div>
      {/* <span className="text-4xl font-bold">Welcome to Our Spa & Massage Center</span> */}
      {/* <div className="  absolute top-5 left-5 w-full h-full flex items-center justify-start ">
         <h1 className= " text-white text-4xl font-bold mt-0">Welcome to Our Spa & Massage Center</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleBookNowClick}
          onSubmit={handleSubmitForm} 
        >
          Book Now  
        </button>
        {showPopUp && <PopUp onClose={handleClosePopUp} />}
      </div> */}
    </div>

    //       {/* <div className="grid grid-cols-2 gap-4">
    //         <img src={image1} alt="Massage Room" className="rounded-lg" />
    //         <img src={image2} alt="Spa" className="rounded-lg" />
    //       </div>
    //       <p className="text-lg mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum laoreet quam, vel suscipit quam dapibus nec. Ut malesuada orci sit amet quam viverra, ac tristique eros tincidunt.</p>
    //       <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-8 hover:bg-blue-600">Book Now</button>
    //     </div>
    //  // </div> */}
  );
};

export default HomePage;
