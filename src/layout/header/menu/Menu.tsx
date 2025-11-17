import React from "react";
import { LanguageSwitch } from "../../../components/languageSwitch/LanguageSwitch";
import { S } from "../Header_Styles";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

export type MenuItemsType = {
  nameItems: string;
  hrefItem: string;
};

export const Menu: React.FC<{ menuItems: Array<MenuItemsType> }> = (props: {
  menuItems: Array<MenuItemsType>;
}) => {
  return (
    <S.StyledMenu>
      <S.StyledListMenu>
        {props.menuItems.map((item, index: number) => {
          return (
            <li key={index}>
              <Link
                to={item.hrefItem}
                onClick={() => animateScroll.scrollToTop()}
              >
                <span>#</span>
                {item.nameItems}
              </Link>
            </li>
          );
        })}
        <li>
          <LanguageSwitch />
        </li>
      </S.StyledListMenu>
    </S.StyledMenu>
  );
};
