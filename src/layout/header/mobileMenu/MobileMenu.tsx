import { LanguageSwitch } from "../../../components/languageSwitch/LanguageSwitch";
import { Logo } from "../../../components/logo/Logo";
import { MobileMedia } from "../mobileMedia/MobileMedia";
import React, { useState } from "react";
import { S } from "../Header_Styles";

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

  const handleToggle = () => {
    setBurgerMenuIsOpen(!burgerMenuIsOpen);
  };

  return (
    <S.StyledMobileMenu>
      <S.Burgerbutton onClick={handleToggle} isOpen={burgerMenuIsOpen}>
        <span></span>
      </S.Burgerbutton>

      <S.MobileMenuPopup isOpen={burgerMenuIsOpen}>
        <S.StyledLogo>
          <Logo />
        </S.StyledLogo>
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
      </S.MobileMenuPopup>
    </S.StyledMobileMenu>
  );
};
