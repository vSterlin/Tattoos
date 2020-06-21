import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/Layout";


const Background = styled.div`
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
      <Background fluid={image}>
        <BackgroundOverlay>



        </BackgroundOverlay>
      </Background>
    </Layout>
  );
};

export default IndexPage;
