import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3,
  DiHtml5,
  DiWordpress,
  DiGithubBadge,
  DiPhp,
  DiMysql,
} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiFirebase, SiMysql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

    
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiJsBadge />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      
    </Row>
  );
}

export default Techstack;
