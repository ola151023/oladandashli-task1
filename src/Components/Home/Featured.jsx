import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import InfoTable from "./InfoTable";
import AccordionPart from './AccordionPart';
import SectionHeading from "./SectionHeading";
import LeftImage from "./LeftImage";



const Featured = () => {
  return (
    <div className="featured section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <LeftImage />
          </div>
          <div className="col-lg-5">
            <SectionHeading />
            <AccordionPart/>
          </div>
          <div className="col-lg-3">
            <InfoTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
