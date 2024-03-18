import React from 'react'
import BestDeal from '../Components/Home/BestDeal';
import SingleProperty from '../Components/Properties/SingleProperty';
import PageHeading from '../Components/general/PageHeading';
import { Container } from 'react-bootstrap';
 const PropertyDetails = () => {
  return (
  

  

    <div className="propertyDetails-page section">
      <Container>

      <PageHeading  headingText="SINGLE PROPERTY" />

      
          <SingleProperty/>
          <BestDeal/>
      
      </Container>
    </div>

  )
}
export default PropertyDetails; 