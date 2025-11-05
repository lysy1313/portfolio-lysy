import { Container } from "../../components/Container";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import React from "react";
import { S } from "./Footer_Styles";

export const Footer: React.FC = () => {
  return (
    <S.StyledFooter>
      <Container>
        <FlexWrapper justify="space-between" direction="column">
          <FlexWrapper justify="space-between" align="center" wrap="wrap">
            <S.FooterLogo>
              <Logo />
              <p>elias@elias-dev.ml</p>
              <h3>Web designer and front-end developer</h3>
            </S.FooterLogo>
            <S.FooterMedia>
              <h4>Media</h4>
              <ul>
                <li>
                  <a>
                    <Icon
                      height="32px"
                      width="32px"
                      viewBox="0 0 32 32"
                      iconId="github"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <Icon
                      height="32px"
                      width="32px"
                      viewBox="0 0 32 32"
                      iconId="telegram"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <Icon
                      height="32px"
                      width="32px"
                      viewBox="0 0 32 32"
                      iconId="discord"
                    />
                  </a>
                </li>
              </ul>
            </S.FooterMedia>
          </FlexWrapper>
          <S.Copyright>© Copyright 2025. Made by Lysy</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.StyledFooter>
  );
};
