import React from "react";
import Title from "./Layouts/Title";
import image1 from "../images/image1.jpg";
import ServiceCard from "./ServiceCard";
import image2 from "../images/massage.jpeg";
import image3 from "../images/hair.jpeg";
import image4 from "../images/facila.jpeg";
import image5 from "../images/download.jpeg"
import { Services } from "../constants/Services.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    // <div
    //   id="Services"
    //   className="container mx-auto w-full pt-5 flex flex-col h-[750px] border-b-[1px]  mb-28"
    // >
    //   <h1 className="text-2xl font-bold mb-4 flex justify-center  text-center">
    //     Our Services
    //   </h1>
    //   <div ">
    //     <ServiceCard
    //       title="Morroco bath"
    //       imageUrl={image3}
    //       description="Description of Service 1hkjhkjhkjhkjlhjkhjkhjkhjkhkjhkjhkjlhkjlh"
    //     />
    //     <ServiceCard
    //       title="Massage"
    //       imageUrl={image2}
    //       description="Description of Service 2"
    //     />
    //     <ServiceCard
    //       imageUrl={image4}
    //       title="Service 3"
    //       description="Description of Service 3"
    //     />
    //     <ServiceCard
    //       imageUrl={image1}
    //       title="Service 4"
    //       description="Description of Service 4"
    //     />
    //     <ServiceCard
    //       imageUrl={image1}
    //       title="Service 4"
    //       description="Description of Service 4"
    //     />
    //     <ServiceCard
    //       imageUrl={image1}
    //       title="Service 4"
    //       description="Description of Service 4"
    //     />
    //   </div>
    // </div>

    //   className="container mx-auto w-full pt-5 flex flex-col h-[750px] border-b-[1px]  mb-28"
    //   className="container mx-auto w-full pt-5 flex flex-col h-[750px] border-b-[1px]  mb-28"
    <div id="Services" className="pt-10 mb-17 h-[1650px] bg-gray-300 ">
      <h1 className="text-2xl font-bold mb-4 flex justify-center  text-center">
        Our Services
      </h1>
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3  gap-6 xl:gap-8 w-[1200px] border-b-[5px]">
        {Services.map((service) => (
          // <navigate key={service.id} to={{
          //   pathname: `/service/${service.id}`,
          //   state: {
          //     imageUrl: service.imageUrl,
          //     title: service.title,
          //     description: service.description,
          //     dog:"dog"
          //   }
          // }}>
          <div
            className="bg-gray-400 p-4 rounded-3xl cursor-pointer "
            onClick={() =>
              serviceDetail(
                service.imageUrl,
                service.title,
                service.description
              )
            }
          >
            <h3 className="text-xl font-bold mb-2 text-center">
              {service.title}
            </h3>
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-60 object-cover mb-2 rounded-lg "
            />
            <p className="hidden">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col  ">
      <h1 className="text-2xl font-bold mb-4 text-center pt-6">
      Nutrition Consultant
      </h1>
      <div className="flex flex-row mx-auto items-center gap-20 ">
      <p class="mt-2 text-lg text-black font-semibold border rounded-2xl w-[500px]">
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
        <img src={image5} className="rounded-xl   w-[600px] h-[350px]" />
      </div>
      </div>
      <div className="flex flex-col  ">
      <h1 className="text-2xl font-bold mb-4 text-center pt-6">
        Saron Beauty Salon
      </h1>
      <div className="flex flex-row mx-auto items-center gap-20 ">
      <p class="mt-2 text-lg text-black font-semibold border rounded-2xl w-[500px]">
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
        <img src={image3} className="rounded-xl   w-[600px] h-[350px]" />
      </div>
      </div>
    </div>
  );
};

export default ServicesPage;
