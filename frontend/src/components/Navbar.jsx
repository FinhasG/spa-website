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
    if (location.pathname === "/blogPage") {
      // Remove the "/blogs" part from the current path
      const destinationPath = path.replace("/blogPage", "");
      navigate(`${location.hash}`);
    } else if (location.pathname === "/") {
      // Remove the "/blogs" part from the current path
      const destinationPath = path.replace("/", "");
      navigate(`${location.hash}`);
    } else if (location.pathname === "/testimonals") {
      const destinationPath = path.replace("/testimonals", "");
      navigate(`${location.hash}`);
    } else if (location.pathname === "/services/service-detail") {
      const destinationPath = path.replace("/services/service-detail", "");
      navigate(`${location.hash}`);
    } else if (path) {
      navigate(path);
    } else {
      scrollToSection(link);
    }
  };

  const navbarItems = [
    { name: "Home", link: "/", path: "/" },
    { name: "Services", link: "services", path: "/ser" },
    { name: "Blogs", link: "blogPage", path: "/blogPage" },
    { name: "Testimonials", link: "testimonals", path: "/testimonals" },
    { name: "About", link: "aboutPage", path: "/aboutPage" },
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
          <ul className="flex justify-end p-2 gap-5">
            {navbarItems.map(({ name, link }) => (
              <li key={name} className="">
                <a
                  href={
                    link === "/"
                      ? "/"
                      : link === "blogPage"
                      ? "/blogPage"
                      : link === "testimonals"
                      ? "/testimonals"
                      : `#${link}`
                  }
                  onClick={(e) => {
                    handleItemClick(name, link);
                  }}
                  className={`text-white hover:text-gray-400 p-2 rounded font-semibold transition duration-300 ease-in-out cursor-pointer ${
                    activeItem === name ? "bg-gray-500  rounded-2xl px-3" : ""
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
          <ul>
            {navbarItems.map(({ name, id, link, path }) => (
              <li key={id} className="">
                <a
                  href={
                    link === "/"
                      ? "/"
                      : link === "blogPage"
                      ? "/blogPage"
                      : link === "testimonials"
                      ? "/testimonials"
                      : `#${link}`
                  }
                  onClick={(e) => {
                    handleItemClick(name, path, link);
                  }}
                  className={`text-white hover:text-gray-400 p-2 rounded font-semibold transition duration-300 ease-in-out cursor-pointer ${
                    activeItem === name ? "bg-gray-500  rounded-2xl px-3" : ""
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
// import React, { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";

// const Navbar = () => {
//   const [activeItem, setActiveItem] = useState("home");

//   const handleItemClick = (itemName) => {
//     setActiveItem(itemName);
//   };

//   const navbarItems = [
//     { name: "Home", link: "/", path: "/", _id: 1001 },
//     { name: "Services",link: "/ser", path: "Services", _id: 1002 },
//     { name: "Blog",link: 'blogs', path: "/blogPost", _id: 1003 },
//     { name: "About Us",link: "about", path: "/aboutPage", _id: 1004 },
//     { name: "Contact", path: "Contact", _id: 1005 },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50">
//       <div id="navbar" className="bg-transparent">
//         <div className="flex items-center justify-between px-6 py-4">
//           <span className="font-semibold text-xl text-green-500">
//             <ScrollLink to="Mainn" spy={true} smooth={true} offset={-70} duration={500}>
//               Lulit Spa
//             </ScrollLink>
//           </span>
//           <ul className="flex gap-5">
//             {navbarItems.map(({ name, _id, path }) => (
//               <li key={_id}>
//                 <ScrollLink
//                   to={path}
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                   className={`text-green-500 hover:text-gray-400 font-semibold cursor-pointer ${
//                     activeItem === name ? "underline" : ""
//                   }`}
//                   onClick={() => handleItemClick(name)}
//                 >
//                   {name}
//                 </ScrollLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
