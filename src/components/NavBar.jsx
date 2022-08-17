import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assets/logo.png";


const NavBar = () => {
    const [ activeLink, setActiveLink ] = useState('home')
    const [ srolled, setScrolled ] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)
    }, [])


  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img 
           src={Logo} 
           alt="logo" 
           className="logo-name"
           />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                {/* <a href="#"> <img src={} alt={} /></a>
                <a href="#"> <img src={} alt={} /></a>
                <a href="#"> <img src={} alt={} /></a> */}
            </div>
            <button className='contact-btn' onclick={() => console.log('Connect')}><span>Contact Me</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
