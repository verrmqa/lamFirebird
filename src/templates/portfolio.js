import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({pageContext})=>
(
  <Layout>
    <h1 dangerouslySetInnerHTML={{__html:pageContext.title}}/>
    <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>

    <a href={`https://${pageContext.acf.portfolio_url}`} >
    <img
        src={pageContext.acf.portfolio_pic.source_url}
        alt="Gatsby Docs are awesome"
      />
    </a>

  </Layout>
);