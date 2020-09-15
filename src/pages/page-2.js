import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/styles.css"
import { Helmet } from "react-helmet"

// COMPONENTS
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Footer from "../components/footer"

const SecondPage = () => (
  <>
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="HandheldFriendly" content="true" />
    </Helmet>
    <div>
      <Header />
      <Banner />
      <About />
      <Footer />
    </div>
  </>
)

export default SecondPage
