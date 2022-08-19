import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import PROJECT_DATA from '../../../projectData';

const data = PROJECT_DATA;

const Projects = (props) => {
  return (
    <Container className="projects-container" id="projects">
      <Row>
        <Col xs={12} md={12} xl={12}>
         {
          data.map((proj) => (
            <ProjectCard 
            key={proj.key}
            imgSrc={proj.imgSrc}
            title={proj.title}
            techStack={proj.techStack}
            demoURL={proj.demoURL}
            codeURL={proj.codeURL}
            />
          ))
         }
        
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;


