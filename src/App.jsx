import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import PropertyDetails from "./Pages/PropertyDetails";
import Contact from "./Pages/Contact";
import Header from "./Components/general/Header";
import Schedule from "./Pages/Schedule";
import ControlledCarousel from "./Components/Home/ControlledCarousel";
import Footer from "./Components/general/Footer";
// import NavContainer from "./Components/general/NavContainer";
import NavBar from "./Components/general/NavBar";
import SubHeader from "./Components/general/SubHeader";
import { Navbar } from "react-bootstrap";


function App() {
  return (
    <>

        <SubHeader/>
       <Header/>
   
        <Routes>
          <Route path="/"  exact="true" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/details" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
   

      <Footer />
    </>
  );
}

export default App;