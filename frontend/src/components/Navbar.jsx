import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const navbarItems = [
    { name: "Home", path: "Mainn", _id: 1001 },
    { name: "Services", path: "Services", _id: 1002 },
    { name: "Blog", path: "BlogPost", _id: 1003 },
    { name: "About Us", path: "AboutPage", _id: 1004 },
    { name: "Contact", path: "Contact", _id: 1005 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div id="navbar" className="bg-transparent">
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-semibold text-xl text-green-500">
            <ScrollLink to="Mainn" spy={true} smooth={true} offset={-70} duration={500}>
              Lulit Spa
            </ScrollLink>
          </span>
          <ul className="flex gap-5">
            {navbarItems.map(({ name, _id, path }) => (
              <li key={_id}>
                <ScrollLink
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`text-green-500 hover:text-gray-400 font-semibold cursor-pointer ${
                    activeItem === name ? "underline" : ""
                  }`}
                  onClick={() => handleItemClick(name)}
                >
                  {name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [activeItem, setActiveItem] = useState("home");

//   const handleItemClick = (itemName) => {
//     setActiveItem(itemName);
//   };

//   const navbarItems = [
//     { name: "Home",path: "/" , link: "Mainn", _id: 1001},
//     { name: "Services", path: "/ser", link: "Services", _id: 1002 },
//     { name: "Blog", path: "/blogPost", link: "BlogPost", _id: 1003 },
//     { name: "About Us",path: "/aboutPage" , link: "AboutPage", _id: 1004, },
//     { name: "Contact", path: "/contact", link: "Contact",  _id: 1005 },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50">
//       <div id="navbar" className="bg-transparent">
//         <div className="flex items-center justify-between px-6 py-4">
//           <span className="font-semibold text-xl text-green-500">
//             <Link to="/">Lulit Spa</Link>
//           </span>
//           <ul className="flex gap-5 ">
//             {navbarItems.map(({ name, _id, link }) => (
//               <li key={_id}>
//                 <Link
//                   to={link}
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
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

