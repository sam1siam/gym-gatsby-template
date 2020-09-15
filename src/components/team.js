import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Card, Img } from "react-bootstrap"

//Images
import trainer1 from "../images/trainer1.jpg"
import trainer2 from "../images/trainer2.jpg"
import trainer3 from "../images/trainer3.jpg"

const Team = () => {
  return (
    <div id="team" className="container-fluid">
      <div className="team-section-title">
        <h1>OUR TEAM</h1>
        <h3>TRAIN WITH EXPERTS</h3>
      </div>
      <div className="team-section">
        <div className="team-section-inner">
          <div className="team-section-cards">
            <img src={trainer1} alt="..." className="round"/>
            <img src={trainer2} alt="..." className="round"/>
            <img src={trainer3} alt="..." className="round"/>
          </div>
          <div className="text-box">
            <h2 className="sub-headings">SAM ANTONIO</h2>
            <h4>DIET CONSULTANT</h4>
          </div>
          <div className="text-box center">
          <h2 className="sub-headings">JOHN RIVERS</h2>
          <h4>PERSONAL TRAINER</h4>
          </div>
          <div className="text-box">
          <h2 className="sub-headings">JEN WILLIAMS</h2>
          <h4>CONDITIONING COACH</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
