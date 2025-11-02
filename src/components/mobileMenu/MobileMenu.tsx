import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { LanguageSwitch } from "../languageSwitch/LanguageSwitch";
import { Logo } from "../logo/Logo";
import { MobileMedia } from "../mobileMedia/MobileMedia";
import { useState } from "react";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <StyledMobileMenu>
      <Burgerbutton onClick={handleToggle}>
        <span></span>
      </Burgerbutton>

      {isOpen && (
        <MobileMenuPopup>
          <StyledLogo>
            <Logo />
          </StyledLogo>
          <ul>
            {props.menuItems.map((item: string, index: number) => {
              return (
                <li key={index}>
                  <a href="">
                    <span>#</span>
                    {item}
                  </a>
                </li>
              );
            })}
            <li>
              <LanguageSwitch />
            </li>
          </ul>
          <MobileMedia />
        </MobileMenuPopup>
      )}
    </StyledMobileMenu>
  );
};

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
  left: 20px;
  transform: scale(1.2);
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999999;
  background-color: rgba(40, 44, 51, 1);
  display: none;
  font-size: 32px;

  padding: 95px 0 16px 16px;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: flex-start;
      align-items: start;
    `};

  ul {
    display: flex;
    gap: 30px;
    align-items: start;
    flex-direction: column;
  }
`;

const Burgerbutton = styled.button<{ isOpen: boolean }>`
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
      props.isOpen &&
      css<{ isOpen: boolean }>`
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
        props.isOpen &&
        css<{ isOpen: boolean }>`
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
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 24px;
        `}
    }
  }
`;
