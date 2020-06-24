import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { WolfPackBattalion } from "@styled-icons/fa-brands";
// import { Gallery, Contacts } from "@styled-icons/remix-line";

const HeaderContainer = styled.div`
  /* position: absolute; */
  height: 8vh;
  width: 100vw;
  left: 0;
  top: 0;
  flex: 1;
  background-color: #1a1a1a;
  z-index: 10;
  display: flex;
  /* justify-content: flex-end; */
`;

const HeaderItemWrapper = styled.div`
  
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
  flex:1;
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

const Wolf = styled(WolfPackBattalion)`
  color: yellowgreen;
  height: 6vh;

  
`;

const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center; 
  padding-left: 10px;
`;

const UnstyledLink = styled(Link)`
  text-decoration: none;
  &.active {
    color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 8px 5px -5px yellowgreen;
  }
`;

const sliderArray = [
  {
    name: "Home",
    // icon: <WolfPackBattalion />,
  },
  {
    name: "Gallery",
    // icon: <Gallery />,
  },
  {
    name: "Contacts",
    // icon: <Contacts />,
  },
];

// const open = (func) => {
//   func("open");
//   setTimeout(() => {
//     func("opened");
//   }, 300);
// };

// const close = (func) => {
//   func("close");
//   setTimeout(() => {
//     func("closed");
//   }, 300);
// };



const Header = () => {
  return (
    <>
      <HeaderContainer>
        <IconWrapper>

        <Wolf />
        </IconWrapper>
        <HeaderItemWrapper>
          {sliderArray.map((item) => {
            return (
              <UnstyledLink
                activeClassName="active"
                to={item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`}
              >
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
