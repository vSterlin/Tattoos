import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { WolfPackBattalion } from "@styled-icons/fa-brands";
import { Triangle } from "@styled-icons/feather";
import Layout from "../components/Layout";

const MainScreen = styled.main`
  display: flex;
  height: 100vh;
`;

const Grey = styled.div`
  position: relative;
  background-color: #313131;
  flex: 0.8;
`;

const Wolf = styled(WolfPackBattalion)`
  position: absolute;
  right: 0;
  width: 210%;
  transform: translateX(50%);
  color: rgba(0, 0, 0, 0.1);
`;

const AppointmentButton = styled.button`
  position: absolute;
  top: 70vh;
  background: #bca211;
  font-size: 3em;
  color: white;
  line-height: 100%;
  width: 300%;
  padding: 8% 3%;
  z-index: 10;
  display: flex;
  text-align: center;
  transition: all 0.1s linear;
  transition-property: width, box-shadow;
  outline: none;
  border: none;
  @media only screen and (max-width: 1200px) {
    font-size: 2.5em;
  }
  @media only screen and (max-width: 910px) {
    font-size: 2em;
  }
  &:focus {
    width: 320%;
    box-shadow: 0px 0px 20px #fac926;
  }
  &:hover {
    width: 320%;
    box-shadow: 0px 0px 20px #fac926;
  }
  &:active {
    width: 320%;
    box-shadow: 0px 0px 50px #fac926;
  }
`;

const Red = styled.div`
  background-color: #910000;
  flex: 1.2;
`;

const Background = styled(BackgroundImage)`
  position: relative;

  background-color: #313131;
  flex: 4.5;
  background-position: left;
`;
const BackgroundOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

const Heading = styled.h1`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 150px;
  @media only screen and (max-width: 1200px) {
    font-size: 120px;
  }
  @media only screen and (max-width: 910px) {
    font-size: 90px;
  }
`;

const GalleryButton = styled.button`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.26);
  border: 5px solid #bca211;
  font-size: 3em;
  color: white;
  text-align: center;
  padding: 1% 3%;
  transition: box-shadow 0.1s linear;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 20px #fac926;
  }
  &:hover {
    box-shadow: 0px 0px 20px #fac926;
  }
  &:active {
    box-shadow: 0px 0px 20px #fac926;
    background: rgba(250, 201, 38, 0.5);
  }
`;

const YellowContainer = styled.div`
  position: relative;
  flex: ${(props) => props.flex};
`;

const Arrow = styled(Triangle)`
  height: 1em;
  transform: rotate(90deg);
  position: absolute;
  right: ${(props) => props.right}px;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const image = data.desktop.childImageSharp.fluid;

  return (
    <Layout>
      <MainScreen>
        <Grey>
          <Wolf />
          <AppointmentButton>
            <YellowContainer flex={8}>Make an appointment!</YellowContainer>
            <YellowContainer flex={2}>
              <Arrow right={0} />
              <Arrow right={10} />
            </YellowContainer>
          </AppointmentButton>
        </Grey>
        <Red></Red>
        <Background fluid={image}>
          <BackgroundOverlay>
            <Heading>Sterlin's Tattoos</Heading>
            <GalleryButton>View Gallery</GalleryButton>
          </BackgroundOverlay>
        </Background>
      </MainScreen>
    </Layout>
  );
};

export default IndexPage;
