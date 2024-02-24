
import React from 'react';
import ServicesPage from '../components/ServicesPage';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage'
import ContactPage from '../components/contact/ContactPage'
import Footer from '../components/Footer';


import { Link } from 'react-scroll';

const MainnPage = () => {
  return (
    <div>
        <div id="Home" >
        <HomePage/>
      </div>
      <div id="services"  >
       <ServicesPage/>
      </div>
      <div id="about" >
        {/* <h1 className="text-3xl text-center py-20">About Section</h1> */}
        {/* Your content for About */}
        <AboutPage/>
      </div>
      <div id="contact" >
        {/* <h1 className="text-3xl text-center py-20">Contact Section</h1> */}
        {/* Your content for Contact */}
        <ContactPage/>
      </div>
      <Footer/>
    </div>
  );
};

export default MainnPage;