import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FestiShare from "../../assets/festishare.png";
import InfoModal from "../InfoModal/InfoModal";


const ProjectCard = (props) => {

    const [ modalShow, setModalShow] = useState(false);

  return (
    <Card className="project-card">
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.techStack}
        </Card.Text>

        <a href={props.demoURL}
        target='_blank'
        >
          <button
          className="proj-btn">Demo</button>
        </a>

        <a href={props.codeURL}
        
        target='_blank'>
          <button className="proj-btn">Code</button>
        </a>

        <button className='proj-btn' variant="primary" onClick={() => setModalShow(true)}>
          info
        </button>
  
        <InfoModal 
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={props.title}
          info={props.info}
        />


      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
