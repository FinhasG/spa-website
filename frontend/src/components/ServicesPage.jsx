import React from "react";
import Title from "./Layouts/Title";
import image1 from "../images/morrocoBath.jpeg";
import ServiceCard from "./ServiceCard";
import image2 from "../images/massage.jpeg";
import image3 from "../images/facila.jpeg";
import image4 from "../images/ceragm.jpg";
import image5 from "../images/waxing.jpeg";
import image6 from "../images/nutcon.jpg"
import { Services } from "../constants/Services.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ServicesPage = () => {
  const navigate = useNavigate();

  const serviceDetail = (imageUrl, title, description) => {
    navigate("/services/service-detail", {
      state: {
        imageUrl: imageUrl,
        title: title,
        description: description,
      },
    });
  };

  // return (
  //   <div id="services"  className="flex flex-col pt-24 mb-17 h-[1700px] bg-gray-300 ">
  //     <h1 className="text-2xl font-bold mb-4 flex justify-center  text-center">
  //       Our Services
  //     </h1>
  //     <div className="grid grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3  gap-6 xl:gap-8 w-[1200px] border-b-[5px]">
        // {Services.map((service) => (
        //   <div
        //     className="bg-gray-400 p-4 rounded-3xl cursor-pointer "
        //     onClick={() =>
        //       serviceDetail(
        //         service.imageUrl,
        //         service.title,
        //         service.description
        //       )
        //     }
        //   >
        //     <h3 className="text-xl font-bold mb-2 text-center">
        //       {service.title}
        //     </h3>
        //     <img
        //       src={service.imageUrl}
        //       alt={service.title}
        //       className="w-full h-60 object-cover mb-2 rounded-lg "
        //     />
        //     <p className="hidden">{service.description}</p>
        //   </div>
        // ))}
  //     </div>
  //     <div className="flex flex-col  ">
  //     <h1 className="text-2xl font-bold mb-4 text-center pt-6">
  //     Nutrition Consultant
  //     </h1>
  //     <div className="flex flex-row mx-auto items-center gap-20 ">
  //     <p class="mt-2 text-lg text-black font-semibold border rounded-2xl w-[500px]">
  //         Some description text. Some dummy text here. Welcome to Sling Academy.
  //         Lorem Ipsum is simply dummy text of the printing and typesetting
  //         industry. Lorem Ipsum has been the industry's standard dummy text ever
  //         since the 1500s, when an unknown printer took a galley of type and
  //         scrambled it to make a type specimen book. It has survived not only
  //         five centuries, but also the leap into electronic typesetting,
  //         remaining essentially unchanged. It was popularised in the 1960s with
  //         the release of Letraset sheets containing Lorem Ipsum passages, and
  //         more recently with desktop publishing software like Aldus PageMaker
  //         including versions of Lorem Ipsum.
  //       </p>
  //       <img src={image5} className="rounded-xl   w-[600px] h-[350px]" />
  //     </div>
  //     </div>
      // <div className="flex flex-col  ">
      // <h1 className="text-2xl font-bold mb-4 text-center pt-6">
      //   Saron Beauty Salon
      // </h1>
      // <div className="flex flex-row mx-auto items-center gap-20 ">
      // <img src={image3} className="rounded-xl   w-[600px] h-[350px]" />
      // <p class="mt-2 text-lg text-black font-semibold border rounded-2xl w-[500px]">
      //     Some description text. Some dummy text here. Welcome to Sling Academy.
      //     Lorem Ipsum is simply dummy text of the printing and typesetting
      //     industry. Lorem Ipsum has been the industry's standard dummy text ever
      //     since the 1500s, when an unknown printer took a galley of type and
      //     scrambled it to make a type specimen book. It has survived not only
      //     five centuries, but also the leap into electronic typesetting,
      //     remaining essentially unchanged. It was popularised in the 1960s with
      //     the release of Letraset sheets containing Lorem Ipsum passages, and
      //     more recently with desktop publishing software like Aldus PageMaker
      //     including versions of Lorem Ipsum.
      //   </p>
        
      // </div>
      // </div>
  //   </div>
  // );
  return (
    <div id="services" className="container  mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold flex justify-center  text-center mb-10 pt-14">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[1200px] mx-auto">
      {Services.map((service) => (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
             <img
            src={service.imageUrl} // Replace with actual image URL
            alt="Massage"
            className="w-full h-70 object-cover object-center rounded:top-2xl"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700">
             {service.p}
            </p>
            <button onClick={()=>
               serviceDetail(
                         service.imageUrl,
                         service.title,
                         service.description
                      )
               } 
               className="text-white font-semibold text-center bg-gray-400 rounded-lg py-1 px-3 mt-1"
               >More</button>
          </div>
           
          </div>
        ))}
       
         {/* <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
            src={image1} // Replace with actual image URL
            alt="Morroco Bath"
            className="w-full h-70 object-cover object-center rounded-xl"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 ">Morroco Bath</h2>
            <p className="text-gray-700">
              Experience the traditional Morroco Bath for ultimate relaxation
              and rejuvenation.
            </p>
            
          </div>
          <button>more</button>
      
        </div>

       
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={image2} // Replace with actual image URL
            alt="Massage"
            className="w-full h-70 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Massage</h2>
            <p className="text-gray-700">
              Indulge in our professional massage therapy to relieve stress and
              tension.
            </p>
            <button>More</button>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={image3} // Replace with actual image URL
            alt="Facial"
            className="w-full h-70 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Facial</h2>
            <p className="text-gray-700">
              Treat your skin to a rejuvenating facial treatment for a radiant
              complexion.
            </p>
          </div>
        </div>

      
       
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={image2} // Replace with actual image URL
            alt="Ceragem"
            className="w-full h-70 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Ceragem</h2>
            <p className="text-gray-700">
              Experience the benefits of massage with our advanced Ceragem
              machine.
            </p>
          </div>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={image5} // Replace with actual image URL
            alt="Wax"
            className="w-full h-70 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Wax</h2>
            <p className="text-gray-700">
              Achieve smooth and silky skin with our professional waxing
              services.
            </p>
          </div>
        </div>

      
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={image6} // Replace with actual image URL
            alt="Nutrition Consultancy"
            className="w-full h-70 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              Nutrition Consultancy
            </h2>
            <p className="text-gray-700">
              Get personalized nutrition advice from our experts to achieve
              your health goals.
            </p>
          </div>
          <button onClick={()=>serviceDetail()}>more</button>
        </div>  */}
      </div>
      <div className="flex flex-col mt-7 ">
      <h1 className="text-2xl font-bold mb-8 text-center pt-6">
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
