import * as React from "react";
import Layout from "../components/layout";
import About from '../components/aboutComponent'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle=" Hey!">
      <StaticImage 
        alt="black & white image of myself with a peace sign at the Napali Coast Park"
        src="../images/me.jpg"
        style={{
          borderRadius: `10%`,
          width: `300px`,
          position: 'relative',
        }}
      />

      <div>
        <About />
      </div>

    </Layout>
  )
}

export default IndexPage