import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Skills.css";
import HTML from '../../../public/assets/html5.svg';
import CSS from '../../../public/assets/css3.svg';
import JS from '../../../public/assets/javascript.svg';
import TS from '../../../public/assets/typescript.svg';
import ReactIcon from '../../../public/assets/react.svg';
import BootstrapIcon from '../../../public/assets/bootstrap.svg';
import NextIcon from '../../../public/assets/nextjs.svg';
import NodeIcon from '../../../public/assets/nodejs.svg';
import ExpressIcon from '../../../public/assets/express.svg';
import MongoIcon from '../../../public/assets/mongodb.svg';
import MysqlIcon from '../../../public/assets/mysql.svg';
import PhotoShopIcon from '../../../public/assets/photoshop.svg';
import FigmaIcon from '../../../public/assets/figma.svg';
import IllustratorIcon from '../../../public/assets/illustrator.svg';
import HerokuIcon from '../../../public/assets/heroku.svg';
import NetlifyIcon from '../../../public/assets/netlify.svg';

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
          <div className="skill-img-div">
                <h3>Heroku</h3>
                <img 
                src={HerokuIcon}
                alt='heroku' 
                className='skill-img'
                />
         </div>
          <div className="skill-img-div">
                <h3>Netlify</h3>
                <img 
                src={NetlifyIcon}
                alt='netlify' 
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
