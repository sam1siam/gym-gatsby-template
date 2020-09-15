import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Helmet } from "react-helmet"
//components
import AppHeader from "../components/header"
import Hero from "../components/hero"
import About from "../components/about"
import Team from "../components/team"
import Banner from "../components/banner"
import Footer from "../components/footer"



const LayoutDesign = () => {
  return (
    <>
  <Helmet>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="HandheldFriendly" content="true"/>
  </Helmet>
  <div>
    <AppHeader />
    <Hero />
    <About />
    <Banner />
    <Team />
    <Footer />
  </div>
  </>
)
}

export default LayoutDesign
