import React from 'react'
import styled, {createGlobalStyle} from "styled-components";


const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Cookie', cursive;
  }
`;


const Layout = ({children}) => {
  return (
    <div>
      <Global />
      {children}
    </div>
  )
}

export default Layout
