import React from 'react';
import ServicesPage from '../components/ServicesPage';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/contact/ContactPage';
import Footer from '../components/Footer';
import { Link } from 'react-scroll';

const MainPage = () => {
  return (
    <div>
      <div id="Home">
        <HomePage />
      </div>
      <div id="services">
        <ServicesPage />
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
      <Footer />
      <style jsx global>{`
        @media (max-width: 768px) {
          /* Add responsive styles here */
        }
      `}</style>
    </div>
  );
};

export default MainPage;