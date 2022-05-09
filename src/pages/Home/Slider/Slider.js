import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';
import './Slider.css';

const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block slider-image"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fresh Apple supply</h3>
            <p>Apple supplier supplies fresh apple from home and abroad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider-image"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>People Working</h3>
            <p>Our People working at our warehouse.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider-image"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Fruits are safe</h3>
            <p>hygienic weather and environment keeps the fruits safe</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;