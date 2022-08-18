import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Container, Row, Col } from "react-bootstrap";
import Me from '../../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <span className="greeting">Welcome to my Personal Portfolio!</span>
            <h1>
              {`Hi, My name is Aaron Rodi`}
              <span
                className="
                    wrap"
              >
                Software Developer
              </span>
            </h1>
            <p>
              Passionate Software Developer. I’ll be graduating in December with
              my AAS in Web Development. When I’m not doing my school work, I am
              building projects and refining my skills. This is my passion. I am
              30 years old and spent the majority of my life wondering if I’d
              ever have a legitimate career in something I’m passionate about
              and I have finally found it. I would highly appreciate any advice
              from people currently in or pursuing a career in development. One
              day I want to be the one giving up-and-coming developers advice on
              how to succeed in this industry.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={Me} alt='profile img' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
