import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Skills.css";
import HTML from '../../assets/html5.svg';

const Skills = () => {
  return (
    <Container className="skills" id='skills'>
      <h1>Skills</h1>
      <Row>
        <Col xs={12} md={6} xl={6}>
          <h2>Frontend</h2>
          <div className="img-container">
            <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} xl={6}>
          <h2>Backend</h2>
          <div className="img-container">
          <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
         </div>
          <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
         </div>
          <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
         </div>
          <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
         </div>
          <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
         </div>
          <div className="skill-img-div">
                <h4>HTML</h4>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
         </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
