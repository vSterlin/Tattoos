import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/Layout";
import { Waves } from "@styled-icons/material";
import {mainColor, secondaryColor, brightColor} from "../colors/colors";

const Background = styled(BackgroundImage)`
  position: relative;

  background-color: ${mainColor};
  /* flex: 4.5; */
  background-position: center;
  /* height: 100vh; */
  flex: 3.5;
  @media only screen and (max-width: 768px){
    display: none;
  }
  z-index: 4;
`;
const BackgroundOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const Flexbox = styled.div`
  display: flex;
  /* height: 100%; */
  height: 92vh;
  @media only screen and (max-width: 768px){
    flex-direction: column;
  }


`;

const InfoDiv = styled.div`
  position: relative;
  flex: 6.5;
  background-color: ${mainColor};
  /* padding: 10%; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  overflow: hidden;

  `;

const Rectangle = styled.div`

display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 10px solid white;
  padding: 40px;
  z-index: 2;
  `;



const Heading = styled.h1`
  font-size: 120px;
  color: white;
  text-align: center;
`;
const SubHeading = styled.h2`
  font-size: 60px;
  color: white;
  text-align: center;
  padding: 0 10px;
  /* text-decoration: underline;
  text-decoration-color: greenyellow; */

/* border-bottom: 1px solid #707070; */
box-shadow: 0 5px 5px -5px ${brightColor};
transition: box-shadow 0.1s linear;
&:hover {
  box-shadow: 0 10px 5px -5px ${brightColor};

}
`;

const Wave = styled(Waves)`
  width: 1500px;
  position: absolute;
  transform: rotate(-45deg);

  color: rgba(0,0,0, 0.5);
  z-index: 1;
  @media screen and (min-width: 1500px){
    width: 2000px;

  }
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
      <Flexbox>
        <InfoDiv>
          <Wave />
          <Rectangle>

          <Heading>Sterlin's<br /> Tattoo<br />Shop</Heading>
          <SubHeading>Learn More</SubHeading>
          </Rectangle>
        </InfoDiv>
        <Background fluid={image} preserveStackingContext	>
          <BackgroundOverlay></BackgroundOverlay>
        </Background>
      </Flexbox>
    </Layout>
  );
};

export default IndexPage;
