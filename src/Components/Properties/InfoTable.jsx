import React from 'react';
import { ListGroup } from 'react-bootstrap';

import Image from '../general/Image'; // Import the Image component

function InfoTable() {
  return (
    <div className="info-table">
      <ListGroup>
        <InfoItem
          imgSrc="assets/images/info-icon-01.png"
          title="450 m2"
          subTitle="Total Flat Space"
        />
        <InfoItem
          imgSrc="assets/images/info-icon-02.png"
          title="Contract"
          subTitle="Contract Ready"
        />
        <InfoItem
          imgSrc="assets/images/info-icon-03.png"
          title="Payment"
          subTitle="Payment Process"
        />
        <InfoItem
          imgSrc="assets/images/info-icon-04.png"
          title="Safety"
          subTitle="24/7 Under Control"
        />
      </ListGroup>
    </div>
  );
}

function InfoItem({ imgSrc, title, subTitle }) {
  return (
    <ListGroup.Item>
      
      <Image src={imgSrc}  alt="" style={{ maxWidth: '52px' }} />

      <h4>{title}<br /><span>{subTitle}</span></h4>
    </ListGroup.Item>
  );
}

export default InfoTable;
