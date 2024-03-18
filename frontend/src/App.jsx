import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./pages/ServiceDetail";
import ServiceDetail from "./pages/ServiceDetail";
import { Route, Routes } from "react-router-dom";
// import A from "./pages/A";
import MainnPage from "./pages/Mainn";
import Footer from "./components/Footer";
import BlogPost from "./components/BlogPost";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/ser" element={<ServicesPage />} />
        <Route path="/service" element={<ServiceDetail />} />
        <Route path="/blogPost" element={<BlogPost />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/" element={<MainnPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
