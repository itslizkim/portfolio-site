import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p> Welcome to my portfolio!</p>
      <StaticImage 
        alt="black & white image of myself with a peace sign at the Napali Coast Park"
        src="../images/me.jpg"
      />
    </Layout>
  )
}

export default IndexPage