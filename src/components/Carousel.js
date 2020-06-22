import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Img from "gatsby-image";

const MainDiv = styled.div`
  display: flex;
  /* height: 100vh; */
  padding: 15vh 6vw 0 6vw;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Image = styled(Img)`
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  &:hover {
    box-shadow: 0 0 50px yellowgreen;
  }

  @media only screen and (max-width: 768px){
    width: 35vw;
  height: 35vw;
  }

`;

const DarkScreen = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;



const BigImage = styled(Img)`
  /* min-width: 100px; */

  height: 80vh;
  width: ${(props) => 80*(props.ratio)}vh;
  @media only screen and (max-width: 768px){
    width: 80vw;
    height: ${(props) => 80/(props.ratio)}vw;
  }
`;
const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "carousel" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
                aspectRatio
              }
            }
          }
        }
      }
    }
  `);

  const imageArray = data.images.edges;

  const [index, setIndex] = useState(0);
  const [renderImage, setRenderImage] = useState(false);
  const prevImage = () => {
    index === 0 ? setIndex(imageArray.length - 1) : setIndex(index - 1);
  };
  const nextImage = () => {
    index === imageArray.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <>
      {renderImage && (
        <DarkScreen>
          <button
            onClick={() => {
              setRenderImage(false);
            }}
          >
            X
          </button>
          {/* <Canvas>
            <BigImageWrapper> */}
              <BigImage
                fluid={imageArray[index].node.childImageSharp.fluid}
                ratio={imageArray[index].node.childImageSharp.fluid.aspectRatio}
              />
            {/* </BigImageWrapper>
          </Canvas> */}
        </DarkScreen>
      )}
      <MainDiv>
        {imageArray.map(({ node }, i) => {
          return (
            <ImageWrapper key={i}
              onClick={() => {
                setRenderImage(true);
                setIndex(i);
              }}
            >
              <Image fluid={node.childImageSharp.fluid} />
            </ImageWrapper>
          );
        })}
                {imageArray.map(({ node }, i) => {
          return (
            <ImageWrapper key={i}
              onClick={() => {
                setRenderImage(true);
                setIndex(i);
              }}
            >
              <Image fluid={node.childImageSharp.fluid} />
            </ImageWrapper>
          );
        })}
                {imageArray.map(({ node }, i) => {
          return (
            <ImageWrapper key={i}
              onClick={() => {
                setRenderImage(true);
                setIndex(i);
              }}
            >
              <Image fluid={node.childImageSharp.fluid} />
            </ImageWrapper>
          );
        })}
      </MainDiv>
    </>
  );
};

export default Carousel;
