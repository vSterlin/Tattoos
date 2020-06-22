import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

const Background = styled.div`
  position: relative;

  background-color: #313131;
  /* flex: 4.5; */
  background-position: left;
  min-height: 100vh;
`;








const Gallery = () => {

  return (
    <Layout>
      <Background>
        <Carousel />
      </Background>
    </Layout>
  );
};

export default Gallery;
