import React from 'react'
import styled, {createGlobalStyle} from "styled-components";
import Slider from "./Slider";

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
      <Slider />
      {children}
    </div>
  )
}

export default Layout
