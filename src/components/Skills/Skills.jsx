import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Skills.css";
import HTML from '../../assets/html5.svg';
import CSS from '../../assets/css3.svg';
import JS from '../../assets/javascript.svg';
import TS from '../../assets/typescript.svg';
import ReactIcon from '../../assets/react.svg';
import BootstrapIcon from '../../assets/bootstrap.svg';
import NextIcon from '../../assets/nextjs.svg';
import NodeIcon from '../../assets/nodejs.svg';
import ExpressIcon from '../../assets/express.svg';
import MongoIcon from '../../assets/mongodb.svg';
import MysqlIcon from '../../assets/mysql.svg';
import PhotoShopIcon from '../../assets/photoshop.svg';
import FigmaIcon from '../../assets/figma.svg';
import IllustratorIcon from '../../assets/illustrator.svg';
import HerokuIcon from '../../assets/heroku.svg';
import NetlifyIcon from '../../assets/netlify.svg';

const Skills = () => {
  return (
    <Container className="skills" id='skills'>
      <h1>Skills</h1>
      <Row>
        <Col xs={12} md={6} xl={6}>
          <h2>Frontend</h2>
          <div className="img-container">
            <div className="skill-img-div">
                <h3>HTML5</h3>
                <img 
                src={HTML}
                alt='html' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h3>CSS3</h3>
                <img 
                src={CSS}
                alt='css' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h3>JavaScript</h3>
                <img 
                src={JS}
                alt='js' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h3>TypeScript</h3>
                <img 
                src={TS}
                alt='typescript' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h3>React</h3>
                <img 
                src={ReactIcon}
                alt='react' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h3>Bootstrap</h3>
                <img 
                src={BootstrapIcon}
                alt='bootstrap' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h3>NextJs</h3>
                <img 
                src={NextIcon}
                alt='nextjs' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h3>Photoshop</h3>
                <img 
                src={PhotoShopIcon}
                alt='photoshop' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h3>Illustrator</h3>
                <img 
                src={IllustratorIcon}
                alt='illustrator' 
                className='skill-img'
                />
            </div>
            <div className="skill-img-div">
                <h3>Figma</h3>
                <img 
                src={FigmaIcon}
                alt='figma' 
                className='skill-img'
                />
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} xl={6}>
          <h2>Backend</h2>
          <div className="img-container">
          <div className="skill-img-div">
                <h3>NodeJS</h3>
                <img 
                src={NodeIcon}
                alt='nodejs' 
                className='skill-img'
                />
         </div>
          <div className="skill-img-div">
                <h3>ExpressJs</h3>
                <img 
                src={ExpressIcon}
                alt='expressjs' 
                className='skill-img'
                />
         </div>
          <div className="skill-img-div">
                <h3>MongoDb</h3>
                <img 
                src={MongoIcon}
                alt='mongodb' 
                className='skill-img'
                />
         </div>
          <div className="skill-img-div">
                <h3>MySql</h3>
                <img 
                src={MysqlIcon}
                alt='mysql' 
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
