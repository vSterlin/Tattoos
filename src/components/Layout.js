import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Slider from "./Slider";
import SliderContext from "../context/SliderContext";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Cookie', cursive;
  }
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Global />
      <SliderContext.Consumer>
        {(context) => (
          <Slider context={context}/>
        )}
      </SliderContext.Consumer>
      {children}
    </div>
  );
};

export default Layout;
