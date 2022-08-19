import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FestiShare from "../../assets/festishare.png";


const ProjectCard = (props) => {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.techStack}
        </Card.Text>

        <a href={props.demo}>
          <button
          onClick={() => console.log(props)}
          className="proj-btn">Demo</button>
        </a>

        <a href={props.code}>
          <button className="proj-btn">Code</button>
        </a>

        <button className="proj-btn">Info</button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
