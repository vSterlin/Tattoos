import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import SliderContext from "../context/SliderContext";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Cookie', cursive;
  }
`;

const MainDiv = styled.div`
  height: 100vh;
`;
const Layout = ({ children }) => {
  return (
    <MainDiv>
      <Global />
          <Header />
      {children}
    </MainDiv>
  );
};

export default Layout;
