import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./pages/ServiceDetail"
import ServiceDetail from "./pages/ServiceDetail";
import { Route, Routes } from "react-router-dom";
// import A from "./pages/A";
import MainnPage from "./pages/Mainn";
import Footer from "./components/Footer";

function App() {
  return (
        <div>  
          <Navbar/>
        <Routes>
          {/* <Route path="/ser" element={<ServicesPage />} /> */}
          <Route path="/service"  element={<ServiceDetail />} />
          <Route path="/" element={<MainnPage />} />
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
       
        </div>
      
   
  );
}

export default App;
