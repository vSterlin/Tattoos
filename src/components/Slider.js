import React, { useState } from "react";
import styled from "styled-components";
import { WolfPackBattalion } from "@styled-icons/fa-brands";
import { Gallery, Contacts } from "@styled-icons/remix-line";
import { RightArrowAlt } from "@styled-icons/boxicons-regular";

const SliderContainer = styled.div`
  position: absolute;
  width: 150px;
  left: 0;
  height: 100vh;
  background-color: #910000;
  z-index: 10;
  display: flex;

  @media only screen and (max-width: 768px) {
    bottom: 0;
    width: 100vw;
    height: 70px;
  }

  @media only screen and (min-width: 768px) {
    transform: translateX(-80%);

    animation: ${(props) => props.open}Slider 0.3s linear forwards;
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
  /* transition: width 0.1s linear;

  &:active {
    width: 20vw;
  } */
`;

const SliderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  @media only screen and (max-width: 768px) {
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

  @media only screen and (max-width: 768px) {
    font-size: 1em;
    & > svg {
      width: 2em;
    }
  }
`;

const ArrowWrapper = styled.div`
  flex: 1;
  line-height: 100vh;
  @media only screen and (max-width: 768px) {
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

const BackgroundOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 9;
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
    opacity: 0;
    animation: ${(props) => props.open}Overlay 0.3s linear forwards;
  }

  @keyframes openOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes closeOverlay {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
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

const timeOut = (func) => {
  func("close");
  setTimeout(() => {
    func("");
  }, 300);
}

const Slider = () => {
  const [slider, setSlider] = useState("");
  return (
    <>
      <SliderContainer open={slider}>
        <ArrowWrapper />
        <SliderItemWrapper>
          {sliderArray.map((item) => {
            return (
              <SliderItem key={item.name}>
                {item.icon}
                <h2>{item.name}</h2>
              </SliderItem>
            );
          })}
        </SliderItemWrapper>

        <ArrowWrapper
          onClick={() => {
            slider === "open" ? timeOut(setSlider) : setSlider("open");
          }}
        >
          <Arrow open={slider} />
        </ArrowWrapper>
      </SliderContainer>
      <BackgroundOverlay open={slider} />
    </>
  );
};

export default Slider;
