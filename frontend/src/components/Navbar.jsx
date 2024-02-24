// import React from 'react';
// import { navLinksdata } from "../constants/NavLinks.js";
// import {Link} from "react-scroll";
// import { useState } from 'react';

// const Navbar = () => {
//   const [activeItem, setActiveItem] = useState('Home');

//   const handleItemClick = (itemName) => {
//     setActiveItem(itemName);
//   };

//   return (
//     <>
//     <div className="w-full p-7 sticky top-0 z-50  bg-blue-300 mx-auto flex justify-between items-center font-titleFont ">
//       <div>
//         <h3>Lulit spa</h3>
//       </div>
//       <div>
//         <ul className='flex items-center gap-8'>
//         {navLinksdata.map(({ _id, title, link }) => (
//             <li

//               key={_id}
//             >
//               <Link
//               //  activeClass="underline"
//                to={link}
//                spy={true}
//                smooth={true}
//                offset={-70}
//                duration={500}
//                className={`text-base font-bold text-white tracking-wide cursor-pointer hover:text-green-600 duration-300  ${activeItem === title ? 'bg-green-300 flex text-center py-1 px-3 rounded-2xl ' : ''}`}
//                onClick={() => handleItemClick(title)}
//               >{title}</Link>
//             </li>
//          )) }
//         </ul>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Navbar
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const navbarItems = [
    { name: "Home", link: "/", _id: 1001,path:"/contact" },
    { name: "Services", path: "/ser", link: "Services", _id:1002 },
    { name: "About", link: "About", _id: 1003,path:"/contact" },
    { name: "Contact", link: "Contact",path:"/contact", _id: 1004 },
  ];
  


  return (
    <nav className="flex items-center justify-between sticky top-0 z-50 flex-wrap bg-amber-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        <span className="font-semibold text-xl tracking-tight  ">
          <Link to="/">Lulit Spa</Link>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow mr-20">
          <ul className="flex justify-end p-2 gap-5">
            {navbarItems.map(( {name, _id, link} ) => (
              <li key={_id} className="">
                 <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`text-white hover:text-gray-400 p-2 rounded font-semibold cursor-pointer active:underline ${
                    activeItem === name ? "bg-gray-500  rounded-2xl px-3" : ""
                  }`}
                  onClick={() => handleItemClick(name)}
                >
                  {name}
                </Link> 
                {/* <a href={`#${link}`} className={`!scroll-smooth text-white hover:text-gray-400 p-2 rounded font-semibold transition duration-300 ease-in-out cursor-pointer ${
                    activeItem === name ? "bg-gray-500  rounded-2xl px-3" : ""
                  }`} >{name}</a> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
