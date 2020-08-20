
import React from "https://unpkg.com/react@16/umd/react.production.min.js"
import Layout from "../components/layout"

export default ({pageContext})=>
(
  <Layout>
    <h1 dangerouslySetInnerHTML={{__html:pageContext.title}}/>
    <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
  </Layout>
);