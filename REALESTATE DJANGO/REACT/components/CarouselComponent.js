import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsComponent from './CardsComponent';

const CarouselComponent = () => {
  return (
    <div>
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
      <div className="container my-5">
    <h2 className="text-center mb-4 text-dark font-weight-bold">Our Real Estate Management Policies, Terms, and Conditions</h2>
    <div className="row">
        <div className="col-md-4 text-center mb-4">
            <img src="https://www.propertyangel.in/uploads/1/6/2/5/16258560/maximize-returns_orig.png" alt="Icon 1" className="img-fluid mb-3 rounded" />
            <h5 className="text-dark font-weight-bold">No Sign up Fee</h5>
            <p className="text-muted">No sign up fee. Pay ONLY when tenanted. Verified Tenants. Cross platform advertising, including video marketing.</p>
        </div>
        <div className="col-md-4 text-center mb-4">
            <img src="https://www.propertyangel.in/uploads/1/6/2/5/16258560/technology-driven-75-75-px-2_orig.png" alt="Icon 2" className="img-fluid mb-3 rounded" />
            <h5 className="text-dark font-weight-bold">Real-time Updates on App</h5>
            <p className="text-muted">Login to our app and check any details about your property, giving you complete transparency and real time updates.</p>
        </div>
        <div className="col-md-4 text-center mb-4">
            <img src="https://www.propertyangel.in/uploads/1/6/2/5/16258560/dedicated-rm-personalized_orig.png" alt="Icon 3" className="img-fluid mb-3 rounded" />
            <h5 className="text-dark font-weight-bold">Dedicated Service Managers</h5>
            <p className="text-muted">Get a senior single point of contact, so you have one person who understands your unique property requirements.</p>
        </div>
    </div>
    
</div>

    </div>
  );
};

export default CarouselComponent;
