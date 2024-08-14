// src/components/CardsComponent.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Import custom CSS for styling

const CardsComponent = () => {
  const carouselItems = [
    {
      imgSrc: 'https://www.mmarchitecturalphotography.com/chicago-architectural-photographer/uploads/2016/01/south-haven-custom-home-interiors.jpg',
      
    },
    {
      imgSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce67ea92005617.5e77761f5ced4.jpg',
      
    },
    {
      imgSrc: 'https://wallup.net/wp-content/uploads/2019/09/977071-interior-design-room-furniture-architecture-house-condo-apartment.jpg',
      
    },
    {
      imgSrc: 'http://getwallpapers.com/wallpaper/full/d/a/0/343383.jpg',
      
    }
  ];

  return (
    <div>
      <Carousel interval={500}> {/* Change slides every 3000ms (3 seconds) */}
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-card">
              <img
                className="d-block w-100"
                src={item.imgSrc}
                alt={`Slide ${index}`}
                style={{ height: '100vh', objectFit: 'cover' }} // Ensure the image fits within the container
              />
              <div className="carousel-card-details">
                <h3>{item.title}</h3>
                
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CardsComponent;
