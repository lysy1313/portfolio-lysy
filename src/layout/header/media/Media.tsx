import React from "react";
import { Icon } from "../../../components/icon/Icon";
import { S } from "../Header_Styles";

export const Media: React.FC = () => {
  return (
    <S.StyledMedia>
      <S.Line></S.Line>
      <a href="https://discord.com/channels/660813608757886991">
        <Icon iconId="discord" height="32px" width="32px" viewBox="0 0 32 32" />
      </a>
      <a href="https://github.com/lysy1313">
        <Icon iconId="github" height="32px" width="32px" viewBox="0 0 32 32" />
      </a>
      <a href="mailto:lysy.ilya1313@gmail.com">
        <Icon iconId="email" height="32px" width="32px" viewBox="0 0 32 32" />
      </a>
    </S.StyledMedia>
  );
};
