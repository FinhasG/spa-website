import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const ServiceDetail = () => {
  const location = useLocation();
  const { imageUrl, title, description } = location.state;

  // // const imageUrl = state?.imageUrl;
  // // const title = state?.title;
  // // const description = state?.description;

  const { state } = location;

  // // Check if state exists and extract data
  // const imageUrl = state?.imageUrl;
  // const title = state?.title;
  // const description = state?.description;

  // Conditional rendering to handle null or undefined state

 
 

  if (!state) {
    return <div>No service data available.</div>;
  }

  return (
    <>
    <div className="w-[1000px] mx-auto mt-8 p-4 mb-24">
      <h1 className="text-3xl font-bold mb-4 text-center pt-6">{title}</h1>
      <div className="flex justify-between gap-20">
        <p className="text-lg pt-3 ps-2">{description}</p>
        <img className="rounded-3xl w-[400px] h-[400px] " src={imageUrl} />
      </div>
      
    </div>
  
   </>
    
  );
};

export default ServiceDetail;
