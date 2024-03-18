import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
 // console.log(activeItem)
  
  // const handleItemClick = (name,path) => {
  //   setActiveItem(name);
  //  console.log(activeItem)
  //  if (path) {
  //   navigate(path);
  // } else {
  //   scrollToSection(name);
  // }
    
  // };

  
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  
  const handleItemClick = (name, path, link) => {
    setActiveItem(name);
    if (location.pathname === "/blogs") {
      // Remove the "/blogs" part from the current path
      const destinationPath = path.replace("/blogs", "");
      navigate(`${location.hash}`);
   
    }else if (location.pathname === "/") {
        // Remove the "/blogs" part from the current path
        const destinationPath = path.replace("/", "");
        navigate(`${location.hash}`)
    }else if(location.pathname==="/testimonials"){
      const destinationPath = path.replace("/testimonials", "");
        navigate(`${location.hash}`)
    } else if(location.pathname==="/services/service-detail"){
      const destinationPath = path.replace("/services/service-detail", "");
      navigate(`${location.hash}`)
    }
    else if(path) {
      navigate(path);
    } else {
      scrollToSection(link);
    }
  }
  

  const navbarItems = [
    { name: "Home", link: "/", path: "/" },
    { name: "Services", link: "services", path: "/services" },
    { name: "Blogs", link: "blogs", path: "/blogs" },
    { name: "Testimonials", link: "testimonials", path: "/testimonials" },
    { name: "About", link: "about",  path: "/about" },
    { name: "Contact", link: "contact", path: "/contact" },
  ];


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


 

  return (
    <nav className="w-full p-5 sticky top-0 z-50  bg-lime-700 mx-auto flex justify-between items-center font-titleFont text-white">
      <div className="flex containeritems-center flex-shrink-0 mr-6 ">
        <span className="font-semibold text-xl tracking-tight cursor-pointer text-decoration-thickness: 2px italic ">
          <Link to="/">Lulit Spa</Link>
        </span>
      </div>
      <div className="w-full  flex-grow lg:flex  lg:items-center lg:w-auto hidden  ">
        <div className=" text-sm lg:flex-grow mr-20">
          <ul className="flex justify-end p-2 gap-5" >
            {navbarItems.map(({ name, id, link, path }) => (
                    <li key={id}  className="">
                    <a
                     href={link==="/"?"/":link === "blogs" ? "/blogs" : link === "testimonials" ? "/testimonials" : `#${link}`}
                     onClick={(e) => {
                       
                      handleItemClick(name,path, link);
                    }}
                      className={`text-white hover:text-gray-400 p-2 rounded font-semibold transition duration-300 ease-in-out cursor-pointer ${
                        activeItem === name ? "bg-gray-500  rounded-2xl px-3":""
                      }`}
                     
                    >
                      {name}
                    </a>
                  </li>
             
            ))}
            
          </ul>
        </div>
      </div>

      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className="lg:hidden absolute  bg-gray-800 w-full text-center text-2xl rounded-3xl"
          style={{ bottom: -175, left: 0 }}
        >
           <ul >
            {navbarItems.map(({ name, id, link, path }) => (
                    <li key={id}  className="">
                    <a
                     href={link==="/"?"/":link === "blogs" ? "/blogs" : link === "testimonials" ? "/testimonials" : `#${link}`}
                     onClick={(e) => {
                       
                      handleItemClick(name,path, link);
                    }}
                      className={`text-white hover:text-gray-400 p-2 rounded font-semibold transition duration-300 ease-in-out cursor-pointer ${
                        activeItem === name ? "bg-gray-500  rounded-2xl px-3":""
                      }`}
                     
                    >
                      {name}
                    </a>
                  </li>
             
            ))}
            
          </ul>
          {/* <a
            href="#home"
            className="block px-4 py-2  text-white cursor-pointer"
          >
            Home
          </a>
          <a href="#Services" className="block px-4 py-2 text-white">
            Services
          </a>
          <a href="#About" className="block px-4 py-2 text-white">
            About
          </a>
          <a href="#Contact" className="block px-4 py-2 text-white">
            Contact
          </a> */}
        </div>
      )}
    </nav>
  );
};

 export default Navbar;