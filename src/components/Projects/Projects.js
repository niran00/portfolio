import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ttGroup from "../../Assets/Projects/ttGroup.png";
import ciSchool from "../../Assets/Projects/ciSchool.png";
import newsletter from "../../Assets/Projects/newsletter.png";
import toDo from "../../Assets/Projects/toDo.png";
import hananaGlobal from "../../Assets/Projects/hananaGlobal.png";
import jewelry from "../../Assets/Projects/ELIZ_Jewelry.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDo}
              isBlog={false}
              title="To Do List"
              description="Real time to do list build with Node.js and Express. Data is passed to Mongo Atlas using Mongoose"
              link="https://damp-thicket-38000.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsletter}
              isBlog={false}
              title="Newsletter Signup "
              description="Simple form that takes the given data and makes a POST request to the MailChimp API "
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ciSchool}
              isBlog={false}
              title="CI SCHOOLS"
              description="Built to be fully manageable by the school's administation"
              link="http://cischool.ac.th/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jewelry}
              isBlog={false}
              title="Eliz Jewelry and Gems"
              description="E-Commerce Wordpress site featuring custom cut jewelry"
              link="https://elizjewelryandgems.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hananaGlobal}
              isBlog={false}
              title="Hanana Legal Services"
              description="Lists various legal services provided by this law firm "
              link="http://hananalegalservices.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ttGroup}
              isBlog={false}
              title="TT Group"
              description="Company Portfolio to showcase constuction projects"
              link="https://www.ttgroup.co.th/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
