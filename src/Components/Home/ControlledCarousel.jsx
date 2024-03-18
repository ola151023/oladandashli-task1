import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../Cssfolders/ControlledCarsouel.css'
const ControlledCarousel = () => {
  return (
    <div className="main-banner">
      <Carousel indicators={false} >
        <Carousel.Item>
          <div className="item item-1">
            <div className="header-text">
              <span className="category">Toronto, <em>Canada</em></span>
              <h2>Hurry!<br />Get the Best Villa for you</h2>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item item-2">
            <div className="header-text">
              <span className="category">Melbourne, <em>Australia</em></span>
              <h2>Be Quick!<br />Get the best villa in town</h2>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item item-3">
            <div className="header-text">
              <span className="category">Miami, <em>South Florida</em></span>
              <h2>Act Now!<br />Get the highest level penthouse</h2>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;
