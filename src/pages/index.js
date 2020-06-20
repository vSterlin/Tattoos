import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { WolfPackBattalion } from "@styled-icons/fa-brands";
import { Triangle } from "@styled-icons/feather";
import { Gallery, Contacts } from "@styled-icons/remix-line";
import Layout from "../components/Layout";
import { RightArrowAlt } from "@styled-icons/boxicons-regular";
const MainScreen = styled.main`
  display: flex;
  height: 100vh;
`;

// const Grey = styled.div`
//   position: relative;
//   background-color: #313131;
//   flex: 0.8;
// `;

// const Wolf = styled(WolfPackBattalion)`
//   position: absolute;
//   right: 0;
//   width: 210%;
//   transform: translateX(50%);
//   color: rgba(0, 0, 0, 0.1);
// `;

// const AppointmentButton = styled.button`
//   position: absolute;
//   top: 70vh;
//   background: #bca211;
//   font-size: 3em;
//   color: white;
//   line-height: 100%;
//   width: 300%;
//   padding: 8% 3%;
//   z-index: 10;
//   display: flex;
//   text-align: center;
//   transition: all 0.1s linear;
//   transition-property: width, box-shadow;
//   outline: none;
//   border: none;
//   @media only screen and (max-width: 1200px) {
//     font-size: 2.5em;
//   }
//   @media only screen and (max-width: 910px) {
//     font-size: 2em;
//   }
//   &:focus {
//     width: 320%;
//     box-shadow: 0px 0px 20px #fac926;
//   }
//   &:hover {
//     width: 320%;
//     box-shadow: 0px 0px 20px #fac926;
//   }
//   &:active {
//     width: 320%;
//     box-shadow: 0px 0px 50px #fac926;
//   }
// `;

// const Red = styled.div`
//   background-color: #910000;
//   flex: 1.2;
// `;

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

// const YellowContainer = styled.div`
//   position: relative;
//   flex: ${(props) => props.flex};
// `;

// const Arrow = styled(Triangle)`
//   height: 1em;
//   transform: rotate(90deg);
//   position: absolute;
//   right: ${(props) => props.right}px;
// `;

const SliderContainer = styled.div`
  position: absolute;
  width: 150px;
  left: 0;
  height: 100vh;
  background-color: #910000;
  z-index: 10;
  display: flex;

  @media only screen and (max-width: 910px) {
    bottom: 0;
    width: 100vw;
    height: 70px;
    
  }
  @keyframes openSlider {
    from {
      transform: translateX(-80%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes closeSlider {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-80%);
    }
  }
  animation: ${(props) => props.open}Slider 0.3s linear forwards;
  /* transition: width 0.1s linear;

  &:active {
    width: 20vw;
  } */
`;

const SliderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  @media only screen and (max-width: 910px) {
    flex-direction: row;

    justify-content: space-around;
    align-items: center;
  }
`;

const SliderItem = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 1em;
  text-align: center;
  padding: 30px 10px;
  & > svg {
    width: 4em;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }

  @media only screen and (max-width: 910px) {
    font-size: 1em;
    & > svg {
      width: 2em;
    }
  }
`;

const ArrowWrapper = styled.div`
  flex: 1;
  line-height: 100vh;
  @media only screen and (max-width: 910px) {
    display: none;
  }
`;

const Arrow = styled(RightArrowAlt)`
  width: 35px;
  color: rgba(255, 255, 255, 0.3);
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }

  @keyframes openArrow {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(-180deg);
    }
  }

  @keyframes closeArrow {
    from {
      transform: rotate(-180deg);
    }
    to {
      transform: rotate(0);
    }
  }
  animation: ${(props) => props.open}Arrow 0.3s linear forwards;
`;
const sliderArray = [
  {
    name: "Home",
    icon: <WolfPackBattalion />,
  },
  {
    name: "Gallery",
    icon: <Gallery />,
  },
  {
    name: "Contacts",
    icon: <Contacts />,
  },
];

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

  const [slider, setSlider] = useState("");
  return (
    <Layout>
      <Background fluid={image}>
        <BackgroundOverlay>
          <Heading>Sterlin's Tattoos</Heading>
          <SliderContainer open={slider}>
            <ArrowWrapper />
            <SliderItemWrapper>
              {sliderArray.map((item) => {
                return (
                  <SliderItem>
                    {item.icon}
                    <h2>{item.name}</h2>
                  </SliderItem>
                );
              })}
            </SliderItemWrapper>

            <ArrowWrapper
              onClick={() => {
                slider === "open" ? setSlider("close") : setSlider("open");
              }}
            >
              <Arrow open={slider} />
            </ArrowWrapper>
          </SliderContainer>
        </BackgroundOverlay>
      </Background>
    </Layout>
  );
};

export default IndexPage;
