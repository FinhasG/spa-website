import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import AboutPage from "./components/AboutPage";
//import ContactPage from "./pages/ServiceDetail"
import ServiceDetail from "./pages/ServiceDetail";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import A from "./pages/A";
import MainPage from "./pages/Mainn";
import Footer from "./components/Footer";
import ContactPage from "./components/contact/ContactPage";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import BlogPage from "./pages/Blog";
import TestimonalsPage from "./pages/Testimonals";

function App() {
  return (
   <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/services/service-detail" element={<ServiceDetail/>}/>
        <Route path="/testimonials" element={<TestimonalsPage/>}/>
      </Routes>
      <Footer />
   </BrowserRouter>
  );
}

export default App;
