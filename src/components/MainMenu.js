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
color: #ca188d;
display: block;
padding: 15px 20px;
text-decoration: none;
`

const MainMenu = () => (
  <StaticQuery query = {
    graphql
    `
    {
      allWordpressWpApiMenusMenusItems(filter:{name:{eq:"main menu"}}) {
        edges {
          node {
            items {
              title
              object_slug
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
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item=>(
          <MenuItem to={`/${item.object_slug}`} key={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </MainMenuInner>
    </MainMenuWrapper>
  )}/>
)

export default MainMenu