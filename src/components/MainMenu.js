import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from 'styled-components'
import Logo from './Logo'

const  MainMenuWrapper = styled.div
`
disply: flex;
background-color: #fbeded;
`

const MainMenuInner = styled.div
`
max-width: 960px;
margin: 0 auto;
display: flex;
width: 960px;
height: 100%;
`

const MenuItem = styled(Link)
`
color: #ffffff;
display: block;
padding: 15px 20px;
`

const MainMenu = () => (
  <StaticQuery query = {
    graphql
    `
    {
      allWordpressMenusMenusItems {
        edges {
          node {
            items {
              title
              slug
            }
            name
          }
        }
      }
    }
    `
  }render={props=>(
    <MainMenuWrapper>
      <MainMenuInner>
        <Logo/>
        {props.allWordpressMenusMenusItems.edges[0].node.items.map(item=>(
          <MenuItem to={item.slug} key={item.title}/>
        ))}
      </MainMenuInner>
    </MainMenuWrapper>
  )}/>
)

export default MainMenu