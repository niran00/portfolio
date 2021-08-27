import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Niran Millet </span>
            from <span className="purple"> Bangkok, Thailand.</span>
            <br />I am a self taught web developer. It started as a hobby,  and overtime grew to become my full-time profession.
            <br />
            <br />
            Aside from coding, some other activities that I love doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)",  textAlign: "end" }}>
            "Simple is better than complex,<br/> 
            Complex is better than complicated."
          </p>
          <footer style={{textAlign: "end"}} className="blockquote-footer">The Zen of Python</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
