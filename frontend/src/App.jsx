import Navbar from "./components/Navbar";
import ServicesPage from "./components/ServicesPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./pages/ServiceDetail";
import ServiceDetail from "./pages/ServiceDetail";
import { Route, Routes } from "react-router-dom";
// import A from "./pages/A";
import MainnPage from "./pages/Mainn";
import BlogPage from "./pages/BlogPage";
import Testimonals from "./pages/Testimonals";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/ser" element={<ServicesPage />} />
        <Route path="/service" element={<ServiceDetail />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/" element={<MainnPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/testimonals" element={<Testimonals />} />
      </Routes>
    </div>
  );
}

export default App;
