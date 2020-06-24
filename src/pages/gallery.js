import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import {mainColor} from "../colors/colors";

const Background = styled.div`
  position: relative;

  background-color: ${mainColor};
  /* flex: 4.5; */
  background-position: left;
  min-height: 92vh;
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
