import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Cookie', cursive;
  }

`;

const MainDiv = styled.div`
  height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;

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
