import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/Layout";

//
const Background = styled(BackgroundImage)`
  position: relative;

  background-color: #313131;
  /* flex: 4.5; */
  background-position: left;
  height: 100vh;
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
  margin: 0 auto;
  position: absolute;
  @media only screen and (max-width: 1200px) {
    font-size: 120px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 90px;
  }
`;






const Contacts = () => {
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
      <Background fluid={image}>
        <BackgroundOverlay>
          <Heading>Contacts</Heading>
        </BackgroundOverlay>
      </Background>
    </Layout>
  );
};

export default Contacts;
