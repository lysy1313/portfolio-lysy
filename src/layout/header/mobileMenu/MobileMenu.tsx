import { LanguageSwitch } from "../../../components/languageSwitch/LanguageSwitch";
import { Logo } from "../../../components/logo/Logo";
import { MobileMedia } from "../mobileMedia/MobileMedia";
import React, { useState } from "react";
import { S } from "../Header_Styles";
import { MenuItemsType } from "../menu/Menu";
import { Link } from "react-router-dom";

export const MobileMenu: React.FC<{
  menuItems: Array<MenuItemsType>;
}> = (props: { menuItems: Array<MenuItemsType> }) => {
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
          {props.menuItems.map((item, index: number) => {
            return (
              <li key={index}>
                <Link to={item.hrefItem} onClick={handleToggle}>
                  <span>#</span>
                  {item.nameItems}
                </Link>
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
