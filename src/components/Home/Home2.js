import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {
   FaEnvelope,
   FaLine,
 } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Computers have always fascinated me.
              Over the years, I gained many skills and much experience. 🧘‍♂️
              <br />
              <br />I am fluent in classic programming languages,
              <i>
                <b className="purple">including Javascript, PHP, CSS, and HTML. </b>
              </i>
              <br />
              <br />
              My field of interest is building 
              <i>
                <b className="purple">Web Sites and Applications </b> 
              </i>  
                in both the {" "}
              <i> 
                <b className="purple">
                  Frontend and Backend.
                </b>
              </i>
              <br />
              <br />
              I have designed a large number of websites using <b className="purple">WordPress.</b> 
              <br/>
              However, whenever possible, I like to apply my passion for developing products with
              <i>
                <b className="purple"> Node.js</b> 
              </i> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/niran00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:niran.millet@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://line.me/ti/p/3s3L25gklY"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLine />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
