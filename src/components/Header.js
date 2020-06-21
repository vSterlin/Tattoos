import React, {  useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { WolfPackBattalion } from "@styled-icons/fa-brands";
import { Gallery, Contacts } from "@styled-icons/remix-line";
import { RightArrowAlt } from "@styled-icons/boxicons-regular";

const HeaderContainer = styled.div`
  position: absolute;
  height: 8%;
  width: 100vw;
  left: 0;
  top: 0;


  background-color: #1a1a1a;
  z-index: 10;
  display: flex;
  justify-content: flex-end;



`;



const HeaderItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
  justify-content: space-around;


`;

const HeaderItem = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 1em;
  text-align: center;
  padding: 0 5px;
  & > svg {
    width: 4em;
  }

  transition: box-shadow 0.1s linear;
&:hover {
  color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 5px -5px yellowgreen;

}

  @media only screen and (max-width: 768px) {
    font-size: 1em;
    & > svg {
      width: 2em;
    }
  }
`;



const UnstyledLink = styled(Link)`
  text-decoration: none;
`

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


const open = (func) => {
  func("open");
  setTimeout(() => {
    func("opened");
  }, 300);
};

const close = (func) => {
  func("close");
  setTimeout(() => {
    func("closed");
  }, 300);
};
const Header = () => {



  return (
    <>
      <HeaderContainer>

        <HeaderItemWrapper>
          {sliderArray.map((item) => {
            return (
              <UnstyledLink to={item.name === "Home" ? "/" : `/${(item.name).toLowerCase()}`}>
                <HeaderItem key={item.name}>
                  <h2>{item.name}</h2>
                </HeaderItem>
              </UnstyledLink>
            );
          })}
        </HeaderItemWrapper>

      </HeaderContainer>
    </>
  );
};

export default Header;