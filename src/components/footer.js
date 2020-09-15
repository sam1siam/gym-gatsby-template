import React from "react"
import { Link } from "gatsby"
import { Container, Row, Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faThumbtack,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import "../styles/styles.css"

//Socials
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"

const Footer = () => {
  return (
    <>
      <div id="contact" className="contact-section-title">
        <h1>CONTACT US</h1>
        <h3>BEST GYM IN THE WORLD</h3>
      </div>
      <div className="container-fluid">
        <div id="map-container-google-3">
          <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=NEW%20HAMPSHIRE+(POWERHOUSE%20GYM)&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div className="footer">
          <div className="upper-bar">
            <div className="first-bar">
              <FontAwesomeIcon icon={faThumbtack} />
              <h3>400 Middle Winchend Rd, NH 03461</h3>
            </div>
            <div className="first-bar">
              <FontAwesomeIcon icon={faPhone} />
              <h3>125-711-811 | 125-668-886</h3>
            </div>
            <div className="first-bar">
              <FontAwesomeIcon icon={faEnvelope} />
              <h3>support.powerhouse@gmail.com</h3>
            </div>
          </div>
          <div className="lower-bar">
            <p>COPYRIGHT© 2020 DESIGNED BY SAMER SIAM</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
