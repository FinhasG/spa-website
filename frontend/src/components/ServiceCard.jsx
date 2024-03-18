import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ imageUrl, title, description, additionalCards }) => {
  const [isShuffled, setIsShuffled] = useState(false);

  const shuffleCards = () => {
    setIsShuffled(true);
    setTimeout(() => {
      setIsShuffled(false);
    }, 500); // Adjust timing to match CSS transition duration
  };

  return (
    <Link
      to={{
        pathname: "/service",
        state: {
          imageUrl: imageUrl,
          title: title,
          description: description,
        },
      }}
    >
      <div
        className={`relative w-full bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ${
          isShuffled ? "transition-all" : ""
        }`}
      >
        <div className="flex justify-between mt-2">
          {additionalCards &&
            additionalCards.map((card, index) => (
              <div key={index} className="w-1/3 p-2">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
        </div>
        <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
        <div
          className="absolute bottom-0 w-full bg-white bg-opacity-75 p-4"
          style={{ height: "5rem" }}
        >
          {" "}
          {/* Adjust height as needed */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const ServiceCard = ({ imageUrl, title, description, additionalCards }) => {
//   const [isShuffled, setIsShuffled] = useState(false);

//   const shuffleCards = () => {
//     setIsShuffled(true);
//     setTimeout(() => {
//       setIsShuffled(false);
//     }, 500); // Adjust timing to match CSS transition duration
//   };

//   return (
//     <div className={`relative w-full bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ${isShuffled ? 'transition-all' : ''}`}>
//       <div className="flex justify-between mt-2">
//         {additionalCards.map((card, index) => (
//           <div key={index} className="w-1/3 p-2">
//             <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//               <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
//               <p className="text-gray-700">{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <h2 className="absolute top-2 left-2 text-xl font-bold text-white bg-blue-500 px-2 py-1 rounded">{title}</h2>
//       <Link to={{
//         pathname:'/service',
//         state: {
//           imageUrl: imageUrl,
//           title: title,
//           description: description,
//         }
//       }}>
//         <img className="w-full h-52 object-cover" src={imageUrl} alt={title} />
//       </Link>
//       <div className="absolute bottom-0 w-full bg-white bg-opacity-75 p-4">
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <button onClick={shuffleCards} className="absolute bottom-2 right-2 py-2 px-4 text-white bg-blue-500 font-semibold uppercase rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">Shuffle</button>
//     </div>
//   );
// };

// export default ServiceCard;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const ServiceCard = ({ imageUrl, title, description }) => {
//   const [isShuffled, setIsShuffled] = useState(false);

//   const shuffleCards = () => {
//     setIsShuffled(true);
//     setTimeout(() => {
//       setIsShuffled(false);
//     }, 500); // Adjust timing to match CSS transition duration
//   };

//   return (
//     <div className={`relative w-full h-96 bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ${isShuffled ? 'transition-all' : ''}`}>
//       <h2 className="absolute top-2 left-2 text-xl font-bold text-white bg-blue-500 px-2 py-1 rounded">{title}</h2>
//       <Link to={{
//         pathname:'/service',
//         state: {
//           imageUrl: imageUrl,
//           title: title,
//           description: description,
//         }
//       }}>
//         <img className="w-full h-52 object-cover" src={imageUrl} alt={title} />
//       </Link>
//       <div className="absolute bottom-0 w-full bg-white bg-opacity-75 p-4">
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <button onClick={shuffleCards} className="absolute bottom-2 right-2 py-2 px-4 text-white bg-blue-500 font-semibold uppercase rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">Shuffle</button>
//     </div>
//   );
// };

// export default ServiceCard;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const ServiceCard = ({ imageUrl, title, description }) => {
//   const [isShuffled, setIsShuffled] = useState(false);

//   const shuffleCards = () => {
//     setIsShuffled(true);
//     setTimeout(() => {
//       setIsShuffled(false);
//     }, 500); // Adjust timing to match CSS transition duration
//   };

//   return (
//     <div className={`w-full h-96 bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ${isShuffled ? 'transition-all' : ''}`}>
//       <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
//       <Link to={{
//         pathname:'/service',
//         state: {
//           imageUrl: imageUrl,
//           title: title,
//           description: description,
//         }
//       }}>
//         <img className="w-full object-cover h-52" src={imageUrl} alt={title} />
//       </Link>
//       <div className="p-4">
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <button onClick={shuffleCards} className="block w-full py-2 text-center bg-blue-500 text-white font-semibold uppercase rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">Shuffle</button>
//     </div>
//   );
// };

// export default ServiceCard;

// import React from 'react';
// import {Link} from 'react-router-dom'

// const ServiceCard = ({ imageUrl, title, description }) => {
//   return (
//     <div className="max-w-md w-full h-[360px] bg-white shadow-lg rounded-4xl overflow-hidden">
//       <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
//       <Link to={{pathname:'/service',
//        state: {
//         // imageUrl: 'imageUrl',
//         title: 'title',
//         description: 'description',
//       }
// }}>
//   <img className="w-full " src={imageUrl} alt={title}/></Link>
//       <div className="p-4">
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <button>More Information</button>
//     </div>
//   );
// };

// export default ServiceCard;
