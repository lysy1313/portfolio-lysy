import React from "react";
import { Icon } from "../../../components/icon/Icon";
import { S } from "../Header_Styles";

export const MobileMedia: React.FC = () => {
  return (
    <S.StyledMobileMedia>
      <a href="">
        <Icon iconId="discord" height="32px" width="32px" viewBox="0 0 32 32" />
      </a>
      <a href="">
        <Icon iconId="github" height="32px" width="32px" viewBox="0 0 32 32" />
      </a>
      <a href="">
        <Icon iconId="email" height="32px" width="32px" viewBox="0 0 32 32" />
      </a>
    </S.StyledMobileMedia>
  );
};
