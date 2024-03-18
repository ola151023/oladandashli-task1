import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import PageHeading from '../Components/general/PageHeading';
import PropertiesFilter from '../Components/Properties/PropertiesFilter';
import PropertiesSection from '../Components/Properties/PopertiesSection';
// You can import your custom CSS here

 const Properties = () => {
  return (

   
<div className="properties-page section">
      <Container>

      
      {/* Page Heading */}
      <PageHeading headingText={"PROPERTIES"}/>
      
      {/* Properties Section */}
     
       {/* <PropertiesFilter/> */}
          {/* Properties List */}
          <PropertiesSection/>
          {/* Your properties list code goes here */}
        </Container>

      
     
    </div>



  );
}
export default Properties; 