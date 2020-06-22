import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Close } from "@styled-icons/evil";
import OutsideClickHandler from "react-outside-click-handler";

import Img from "gatsby-image";

const MainDiv = styled.div`
  display: flex;
  /* height: 100vh; */
  padding: 15vh 6vw 5vh 6vw;
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

  @media only screen and (max-width: 768px) {
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
  animation: ${(props) => (props.animation ? "close" : "open")} 0.2s linear;

  @keyframes open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes close {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const BigImage = styled(Img)`
  /* min-width: 100px; */

  height: 80vh;
  width: ${(props) => 80 * props.ratio}vh;

/* FUN */
  /* animation: ${(props) =>
    props.ratio < 1 ? "vertical" : "horizontal"} 0.1s linear;
  @keyframes vertical {
    from {
      height: 0;
    }
    to {
      height: 80vh;
    }
  }
  @keyframes horizontal {
    from {
      width: 0;
    }
    to {
      width: ${(props) => 80 * props.ratio}vh;
    }
  } */



  @media only screen and (max-width: 768px){
    width: 80vw;
    height: ${(props) => 80 / props.ratio}vw;
  }


`;

const CloseButton = styled(Close)`
  color: yellowgreen;
  height: 40px;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 10px;
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
  const [animation, setAnimation] = useState(false);
  
  // const prevImage = () => {
  //   index === 0 ? setIndex(imageArray.length - 1) : setIndex(index - 1);
  // };
  // const nextImage = () => {
  //   index === imageArray.length - 1 ? setIndex(0) : setIndex(index + 1);
  // };

  const close = () => {
    setAnimation(true);
    setTimeout(() => {
      setRenderImage(false);
      setAnimation(false);
    }, 200);
  };
  return (
    <>
      {renderImage && (
        <DarkScreen
          animation={animation}
        >
          <CloseButton />
          <OutsideClickHandler
            onOutsideClick={() => {
              close();
            }}
          >
            <BigImage
              fluid={imageArray[index].node.childImageSharp.fluid}
              ratio={imageArray[index].node.childImageSharp.fluid.aspectRatio}
            />
          </OutsideClickHandler>
        </DarkScreen>
      )}
      <MainDiv>
        {imageArray.map(({ node }, i) => {
          return (
            <ImageWrapper
              key={i}
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
            <ImageWrapper
              key={i}
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
            <ImageWrapper
              key={i}
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
