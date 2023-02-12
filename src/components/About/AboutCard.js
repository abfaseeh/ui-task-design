import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Abdullah Faseeh </span>
            from <span className="green"> Mirpur, AJK.</span>
            <br />I am a junior pursuing Bachelor in Computer Science from 
            Punjab University Jhelum Campus
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Blogs and Dawn
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#228B22" }}>
            "Seek advice but use your own common sense."{" "}
          </p>
          <footer className="blockquote-footer">A Yiddish Proverb</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
