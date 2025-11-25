import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

//Header
const StyleHeader = styled.header`
  padding: 32px 0 8px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;

//Mobile menu
const StyledMobileMenu = styled.nav`
  display: none;

  select {
    font-size: 32px;
  }

  li a {
    text-decoration: none;
    color: #abb2bf;
    transition: all 0.5s ease;
    span {
      color: #c778dd;
      font-weight: 400;
      transition: all 0.5s ease;
    }
  }
  li a:hover {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    span {
      color: #c778dd;
      font-weight: 500;
    }
  }

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const StyledLogo = styled.div`
  position: absolute;
  top: 30px;
  /* left: 20px; */
  /* transform: scale(1.2); */
`;

const MobileMenuPopup = styled.div<{ isopen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999999;
  background-color: rgba(40, 44, 51, 1);
  /* display: none; */
  font-size: 32px;
  transform: translateX(200%);

  padding: 95px 0 16px 16px;

  transition: 1s ease-in-out;

  ul {
    display: flex;
    gap: 10px;
    align-items: start;
    flex-direction: column;

    transition: 1.5s ease-in-out;
  }

  ${(props) =>
    props.isopen &&
    css<{ isopen: boolean }>`
      transform: translateX(0);
      display: flex;
      justify-content: flex-start;
      align-items: start;
      text-align: start;
      ul {
        gap: 30px;
      }
    `};
`;

const Burgerbutton = styled.button<{ isopen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 99999999999999;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 60px;

    ${(props) =>
      props.isopen &&
      css<{ isopen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
      display: none;

      ${(props) =>
        props.isopen &&
        css<{ isopen: boolean }>`
          display: block;
          transform: rotate(-45deg) translateY(0);
        `}
    }
    &::after {
      content: "";
      display: block;
      right: 0;
      width: 15px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isopen &&
        css<{ isopen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 24px;
        `}
    }
  }
`;

//Mobile media
const StyledMobileMedia = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  transform: scale(2);

  a,
  svg {
    background-color: transparent;
    transition: all 0.5s ease-in-out;
  }

  svg:hover {
    transform: scale(1.3);
    fill: ${theme.colors.font};
  }
`;

//Media
const StyledMedia = styled.div`
  position: absolute;
  left: -145px;
  top: -32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;

  a,
  svg {
    background-color: transparent;
    transition: all 0.5s ease-in-out;
  }

  svg:hover {
    transform: scale(1.3);
    fill: ${theme.colors.font};
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const Line = styled.span`
  height: 191px;
  width: 1px;
  background-color: ${theme.colors.seconderyFont};
`;

//Menu
const StyledMenu = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const StyledListMenu = styled.ul`
  display: flex;
  gap: 32px;
  justify-content: center;

  li a {
    text-decoration: none;
    color: #abb2bf;
    transition: all 0.5s ease;
    span {
      color: #c778dd;
      font-weight: 400;
      transition: all 0.5s ease;
    }
  }
  li a:hover {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    span {
      color: #c778dd;
      font-weight: 500;
    }
  }
`;

export const S = {
  StyleHeader,
  StyledMobileMenu,
  StyledLogo,
  MobileMenuPopup,
  Burgerbutton,
  StyledMobileMedia,
  StyledMedia,
  Line,
  StyledMenu,
  StyledListMenu,
};
