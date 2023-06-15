import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import imgOne from "../../assets/about/gallery-10.jpg";
import imgTwo from "../../assets/about/gallery-2.jpg";
import imgThree from "../../assets/about/gallery-6.jpg";
import "../../../src/assets/style.scss";
import SliderMainZero from "../components/SliderMainZero";
import Header from "../menu/header";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import CountUp from "react-countup";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const about = () => (
  <>
    <section className="jumbotron no-bg bg-gray pb-0 mb-5">
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-5">
                <img src={imgOne} alt="" className="img-fluid" />
              </div>
              <div className="col-7">
                <span className="line__subtitle py-5">Since 2023</span>
                <img src={imgTwo} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="spacer-double"></div>
            <div>
              <h6>About Us</h6>
              <h2>We Plan For The Future</h2>
              <p>
                Axil is a global branding agency that powers the world’s most
                innovative companies to champion big ideas and leap to what’s
                next.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <img src={imgThree} alt="" className="img-fluid h-75" />
          </div>
        </div>
      </div>
    </section>

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h6>why Choose us</h6>
          <h1 className="fw-bolder w-75">
            We’re a global creative agency based in New York
          </h1>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <img
                src={imgOne}
                alt=""
                className="img-fluid ps-5 border-start border-5"
              />
            </div>
          </div>
          <p className="w-50 mt-5 ps-5 border-start border-5">
            We’re a global creative agency based in New York, Amsterdam and
            Toronto helping brands overcome growth-limiting challenges with
            moonshot creativity in branding, advertising and public relations.
          </p>
        </div>
        {/* Counter Section */}
        <div className="container">
          <div className="row">
            <div className="col-md-3 py-5">
              <CountUp end={12} /> + TOTAL YEARS IN BUSINESS
            </div>
            <div className="col-md-3 py-5">
              <CountUp end={300} /> + UNIQUE CLIENTS WE SERVE
            </div>
            <div className="col-md-3 py-5">
              <CountUp end={450} /> + UNIQUE CLIENTS WE SERVE
            </div>
            <div className="col-md-3 py-5">
              <CountUp end={105} /> + WORLD WIDE TOTAL BRANCH
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Accordion defaultActiveKey="0" className="py-5">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Accordion Item #1
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <strong>This is the first item's accordion body.</strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Accordion Item #2
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {" "}
                    <strong>This is the first item's accordion body.</strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Accordion Item #3
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {" "}
                    <strong>This is the first item's accordion body.</strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="col-md-6">
            <Accordion defaultActiveKey="0" className="py-5">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Accordion Item #1
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <strong>This is the first item's accordion body.</strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Accordion Item #2
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {" "}
                    <strong>This is the first item's accordion body.</strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Accordion Item #3
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {" "}
                    <strong>This is the first item's accordion body.</strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
);
export default about;
