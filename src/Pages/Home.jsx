import React from "react";
import { Container } from 'react-bootstrap'
import  ControlledCarousel from "../Components/Home/ControlledCarousel.jsx"
import Featured from '../Components/Home/Featured.jsx'
import FunFacts from "../Components/Home/FunFacts.jsx";
import BestDeal from "../Components/Home/BestDeal.jsx";
import PropertiesSection from "../Components/Properties/PopertiesSection.jsx";
import VideoSection from "../Components/Home/VideoSection.jsx";
import VideoContent from "../Components/Home/VideoContent.jsx";
import ContactSection from "../Components/Home/ContactSection.jsx";
import ContactContent from "../Components/Home/ContactContent.jsx";
const Home = () => {
  return (
    <div Container>
   
        <ControlledCarousel/>
        <Featured/>
        <VideoSection/>
        <VideoContent/>
        <FunFacts/>
        <BestDeal/>
        <PropertiesSection/>
        <ContactSection/>
        <ContactContent/>

  
    </div>
  );
};
export default Home;
