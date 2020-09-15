import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      gymHero: file(relativePath: { eq: "gymhero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="container-fluid">
        <div className="hero-div">
          <h1 className="hero-text highlight">CHALLENGE</h1>
          <h1 className="hero-text slanted">YOUR LIMITS</h1>
          <button type="submit" class="button">
            START HERE
          </button>
        </div>
        <Img
          className="hero-image"
          fluid={data.gymHero.childImageSharp.fluid}
        />
      </div>
    </>
  )
}

export default Hero
