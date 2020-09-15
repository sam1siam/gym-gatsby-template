import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Navbar, Nav } from "react-bootstrap"
import "../styles/styles.css"

//Socials
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"

const AppHeader = () => {
  return (
    <div id="home" className="container-fluid">
      <div className="header">
        <Navbar collapseOnSelect="collapseOnSelect" expand="lg" variant="dark">
          <Navbar.Brand className="logo" href="#home">
            POWERHOUSE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav defaultActiveKey="#home">
              <Nav.Link className="links" href="/#home">
                HOME
              </Nav.Link>
              <Nav.Link className="links" href="/#aboutus">
                ABOUT US
              </Nav.Link>
              <Nav.Link className="links" href="../page-2">
                SERVICES
              </Nav.Link>
              <Nav.Link className="links" href="/#team">
                TEAM
              </Nav.Link>
              <Nav.Link className="links" href="/#contact">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="socials">
            <a href="/">
              <img className="instagram" src={instagram} alt="Instagram" />
            </a>
            <a href="/">
              <img className="instagram" src={facebook} alt="Instagram" />
            </a>
          </div>
        </Navbar>
      </div>
    </div>
  )
}

export default AppHeader
