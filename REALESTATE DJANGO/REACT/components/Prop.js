import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../styles/prop.css"; // Ensure this file is created and included
import { Container } from "react-bootstrap";
import Header from "./Header";

function Prop() {
  return (
    <MDBContainer fluid className="my-5 bg-image">
        <Header/>
        <Container>
      <MDBRow>
        {/* Row 1 */}
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard className="card-no-hover">
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x4</p>
              </div>
            </div>
            <MDBCardImage
              src="https://i.pinimg.com/originals/33/f7/e0/33f7e064fc43393287024a956f97f2c5.jpg"
              position="top"
              alt="Bungalow"
              className="card-img"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" >
                   BOSTON,MA
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$99999</s>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">BUNGALOW</h5>
                <h5 className="text-dark mb-0">$9999</h5>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  Available: <span className="fw-bold">6</span>
                </p>
                <div className="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {/* Row 2 */}
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard className="card-no-hover">
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x2</p>
              </div>
            </div>
            <MDBCardImage
              src="https://cdn.jhmrad.com/wp-content/uploads/white-beach-house-exterior-dream-homes-inspirational-casa_1934554.jpg"
              position="top"
              alt="Beach House"
              className="card-img"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#" >
                SAN FRANCISCO,CA
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$11199</s>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">BEACH HOUSE</h5>
                <h5 className="text-dark mb-0">$1099</h5>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  Available: <span className="fw-bold">7</span>
                </p>
                <div className="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon far icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard className="card-no-hover">
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x3</p>
              </div>
            </div>
            <MDBCardImage
              src="https://assets.architecturaldigest.in/photos/60083f493a9d9570bc842068/16:9/w_1280,c_limit/mumbai-apartment-pka-interior-design-feature-02-866x487-1366x768.jpg?mbid=social_retweet"
              position="top"
              alt="Rental House"
              className="card-img"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#" >
                    SEATTLE, WA
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$1399</s>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">RENTAL HOUSE</h5>
                <h5 className="text-dark mb-0">$1099</h5>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  Available: <span className="fw-bold">5</span>
                </p>
                <div className="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star-half-alt" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        {/* Row 2 Updated */}
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard className="card-no-hover">
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x2</p>
              </div>
            </div>
            <MDBCardImage
              src="https://res.cloudinary.com/traveltripperweb/image/upload/c_limit,h_1920,w_1920/v1574540921/a6fkn0kizf172pnpge20.jpg"
              position="top"
              alt="Beach House"
              className="card-img"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#" >
                  CHICAGO, IL
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$11199</s>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">PENTHOUSE SUITE</h5>
                <h5 className="text-dark mb-0">$1099</h5>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  Available: <span className="fw-bold">7</span>
                </p>
                <div className="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon far icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard className="card-no-hover">
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x3</p>
              </div>
            </div>
            <MDBCardImage
              src="http://cdn.decoist.com/wp-content/uploads/2016/01/Industrial-kitchen-and-living-area-of-loft-with-exposed-brick-walls.jpg"
              position="top"
              alt="Rental House"
              className="card-img"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#" >
                  MANHATTAN, NY
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$11599</s>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Urban Loft</h5>
                <h5 className="text-dark mb-0">$10099</h5>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  Available: <span className="fw-bold">5</span>
                </p>
                <div className="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star-half-alt" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard className="card-no-hover">
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x2</p>
              </div>
            </div>
            <MDBCardImage
              src="https://paradisevillapr.com/wp-content/uploads/2018/08/lakeside-back-a-1.jpg"
              position="top"
              alt="Modern Apartment"
              className="card-img"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#" >
                  LAKE TAHOE, CA
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$12999</s>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">LAKESIDE VILLA</h5>
                <h5 className="text-dark mb-0">$11199</h5>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  Available: <span className="fw-bold">4</span>
                </p>
                <div className="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon far icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </Container>
    </MDBContainer>
  );
}

export default Prop;
