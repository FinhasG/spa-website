import React from "react";
import ServiceCard from "./ServiceCard";
import image3 from "../images/hair.jpeg";
import image5 from "../images/download.jpeg";
import { Services } from "../constants/Services";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Icon1 from "./Icons/Icon1.svg";
import Icon2 from "./Icons/Icon2.svg";
import Icon3 from "./Icons/Icon3.svg";
import Icon4 from "./Icons/Icon4.svg";
import hairStyle from "../images/hairStyle.jpeg";

// Sample data for the nutrition cards
const nutritionCardsData = [
  {
    icon: Icon1,
    title: "Healthy Eating Plan",
    description: "Personalized meal plans tailored to your needs.",
  },
  {
    icon: Icon2,
    title: "Nutritional Counseling",
    description: "Expert guidance on nutrition and healthy habits.",
  },
  {
    icon: Icon3,
    title: "Weight Management",
    description: "Support to achieve your weight loss or gain goals.",
  },
  {
    icon: Icon4,
    title: "Sports Nutrition",
    description: "Optimize performance and recovery with proper nutrition.",
  },
];

// Sample data for the Saron Beauty Salon cards
const saronBeautyCardsData = [
  {
    icon: hairStyle,
    title: "Hair Styling",
    description: "Professional hair styling for all occasions.",
  },
  {
    icon: "Icon2",
    title: "Hair Coloring",
    description: "Expert hair coloring services for vibrant looks.",
  },
  {
    icon: "Icon3",
    title: "Hair Extensions",
    description: "High-quality hair extensions for added length and volume.",
  },
  {
    icon: "Icon4",
    title: "Hair Treatments",
    description: "Revitalize your hair with nourishing treatments.",
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  const serviceDetail = (imageUrl, title, description) => {
    navigate("/service", {
      state: {
        imageUrl: imageUrl,
        title: title,
        description: description,
      },
    });
  };

  return (
    <div id="Services" className=" mb-20 h-auto bg-gray-100">
      <h1 className="p-10">Our Services</h1>
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 w-[1200px] border-b-[5px]">
        {Services.map((service) => (
          <ServiceCard
            key={service.title}
            imageUrl={service.imageUrl}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className="w-full h-[80px] bg-white"></div>
      <div className="flex p-6 flex-col mt-20">
        <div className="flex flex-row mx-auto items-center gap-20">
          <img
            src={image5}
            className="rounded-xl w-[600px] h-[350px]"
            alt="Nutrition Consultant"
          />
          <div>
            <h1>Nutrition Consultant</h1>
            <p className="mt-2 text-xl text-black font-semibold border rounded-2xl w-[500px] font-serif text-center p-4 bg-green-200">
              We develop health programs that give opportunities to become more
              efficient and focused on your goals.
            </p>
          </div>
        </div>
        <div className="w-full h-[10px] bg-white"></div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {nutritionCardsData.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className=" rounded-full p-4">
                <img src={card.icon} alt="icon" />
              </div>
              <h2 className="text-xl font-semibold mt-2">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[80px] bg-white"></div>
      <div className="flex flex-col mt-20 mb-20">
        <div className="flex p-6 flex-row mx-auto items-center gap-20">
          <h1>Beauty Salon</h1>
          <p className="mt-2 text-lg text-black font-semibold border rounded-2xl w-[500px] bg-brown-200">
            Some description text. Some dummy text here. Welcome to Sling
            Academy. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
          </p>
          <img
            src={image3}
            className="rounded-xl   w-[500px] h-[350px]"
            alt="Saron Beauty Salon"
          />
        </div>
        <div className="w-full h-[10px] bg-white"></div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {saronBeautyCardsData.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-amber-600 rounded-full  w-[50px] h-[50px] ">
                {/* <div className="w-full h-[350px]"> */}
                <img
                  src={card.icon}
                  alt="Image"
                  className="w-full h-full rounded-full  object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mt-2">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
