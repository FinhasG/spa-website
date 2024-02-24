import React from 'react';
import {Link} from 'react-router-dom'

const ServiceCard = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-md w-full h-[360px] bg-white shadow-lg rounded-4xl overflow-hidden">
      <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
      <Link to={{pathname:'/service',
       state: {
        // imageUrl: 'imageUrl',
        title: 'title',
        description: 'description',
      }
}}>
  <img className="w-full " src={imageUrl} alt={title}/></Link> 
      <div className="p-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <button>More Information</button>
    </div>
  );
};

export default ServiceCard;