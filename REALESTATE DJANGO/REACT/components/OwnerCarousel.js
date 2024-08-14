import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const OwnerCarousel = () => {
  return (
    <div style={{ height: '50vh', overflow: 'hidden' }}>
      <Carousel interval={500}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mmarchitecturalphotography.com/chicago-architectural-photographer/uploads/2016/01/south-haven-custom-home-interiors.jpg"
            alt="First slide"
            style={{ height: '50vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce67ea92005617.5e77761f5ced4.jpg"
            alt="Second slide"
            style={{ height: '50vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallup.net/wp-content/uploads/2019/09/977071-interior-design-room-furniture-architecture-house-condo-apartment.jpg"
            alt="Third slide"
            style={{ height: '50vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://getwallpapers.com/wallpaper/full/d/a/0/343383.jpg"
            alt="Fourth slide"
            style={{ height: '50vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default OwnerCarousel;
