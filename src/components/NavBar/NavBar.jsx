import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../public/assets/logo.png";
import GitIcon from "../../../public/assets/github.svg";
import LinkIcon from "../../../public/assets/linkedin.svg";
import TwitIcon from "../../../public/assets/twitter.svg";
import "./NavBar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveLink = (val) => {
    setActiveLink(val);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" className="logo-name" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("projects")}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              href="https://drive.google.com/file/d/1XYzacTH8lmxf7U-6KkAZMaJXCe6FUKid/view?usp=sharing"
              className=
                'navbar-link'
              onClick={() => updateActiveLink("resume")}
              target='_blank'
            >
              Resume
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/metalhead5209" target="_blank">
                <img src={GitIcon} alt="github" className="soc-icon" />
              </a>
              <a href="https://www.linkedin.com/in/aaron-rodi/" target="_blank">
                <img src={LinkIcon} alt="linkedin" className="soc-icon" />
              </a>
              <a href="https://twitter.com/a_wodi_" target="_blank">
                <img src={TwitIcon} alt="twitter" className="soc-icon" />
              </a>
            </div>
            {/* <a href="#contact"> */}
            <button
              className="contact-btn"
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
            >
              Contact Me</button>
              {/* </a> */}
            
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
