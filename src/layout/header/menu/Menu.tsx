import React from "react";
import { LanguageSwitch } from "../../../components/languageSwitch/LanguageSwitch";
import { S } from "../Header_Styles";

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.StyledMenu>
      <S.StyledListMenu>
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
      </S.StyledListMenu>
    </S.StyledMenu>
  );
};
