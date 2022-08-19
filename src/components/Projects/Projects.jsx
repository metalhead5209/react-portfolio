import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = (props) => {
  return (
    <Container className="projects-container" id="projects">
      <Row>
        <Col xs={12} md={12} xl={12}>
         <ProjectCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
