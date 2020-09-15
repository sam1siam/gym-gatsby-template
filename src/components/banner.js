import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="container-fluid">
        <div className="banner-div">
          <h1 className="banner-text highlight banner-media1">REGISTER NOW</h1>
          <h3 className="banner-text2 banner-media2">WHERE HEALTH AND FITNESS MEET</h3>
          <button type="submit" class="banner-button">
            APPOINTMENT
          </button>
        </div>
        <Img fluid={data.banner.childImageSharp.fluid} />
      </div>
    </>
  )
}

export default Banner
