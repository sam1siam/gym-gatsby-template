import React from "react"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"
import "../styles/styles.css"

import equipment from "../images/equipment.jpg"
import diet from "../images/diet.jpg"
import training from "../images/training.jpg"
import personal from "../images/personal.jpg"

const About = () => {
  return (
    <div className="container-fluid about-section-height">
    <div id="aboutus" className="about-section-title">
      <h1>WHY CHOOSE US?</h1>
      <h3>BELIEVE IN YOURSELF</h3>
    </div>
      <div className="about-section">
        <div className="about-section-inner">
          <div className="about-section-cards">
            <Card className="cards" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={equipment} className="round-card"/>
              <Card.Body>
                <Card.Title className="sub-headings">State of the Art Equipment</Card.Title>
                <Card.Text>
                Laborum de quis. Doctrina dolore dolore appellat aliqua ab ea deserunt
                transferrem. Cernantur sunt cillum te summis, quo in quis aliquip ea probant
                sint o excepteur domesticarum, fabulas iis tamen.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={diet} className="round-card"/>
              <Card.Body>
                <Card.Title className="sub-headings">Nutrition Plans</Card.Title>
                <Card.Text>
                Laborum de quis. Doctrina dolore dolore appellat aliqua ab ea deserunt
                transferrem. Cernantur sunt cillum te summis, quo in quis aliquip ea probant
                sint o excepteur domesticarum, fabulas iis tamen.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={training} className="round-card"/>
              <Card.Body>
                <Card.Title className="sub-headings">Training Plans</Card.Title>
                <Card.Text>
                Laborum de quis. Doctrina dolore dolore appellat aliqua ab ea deserunt
                transferrem. Cernantur sunt cillum te summis, quo in quis aliquip ea probant
                sint o excepteur domesticarum, fabulas iis tamen.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={personal} className="round-card"/>
              <Card.Body>
                <Card.Title className="sub-headings">Personal Training</Card.Title>
                <Card.Text>
                Laborum de quis. Doctrina dolore dolore appellat aliqua ab ea deserunt
                transferrem. Cernantur sunt cillum te summis, quo in quis aliquip ea probant
                sint o excepteur domesticarum, fabulas iis tamen.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
