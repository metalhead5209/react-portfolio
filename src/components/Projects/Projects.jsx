import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "./Projects.css";
import FestiShare from "../../assets/festishare.png";

const Projects = () => {
  return (
    <Container className="projects-container" id="projects">
      <Row>
        <Col xs={12} md={6} xl={6}>
          <Card className="project-card">
            <Card.Img variant="top" src={FestiShare} />
            <Card.Body>
              <Card.Title>FestiShare</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="proj-btn" variant="primary">Go somewhere</Button>
              <Button className="proj-btn" variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} xl={6}>
        <Card className="demo">
            <Card.Img variant="top" src={FestiShare} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
