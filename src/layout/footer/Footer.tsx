import { Container } from "../../components/Container";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import React from "react";
import { S } from "./Footer_Styles";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.StyledFooter>
      <Container>
        <FlexWrapper justify="space-between" direction="column">
          <FlexWrapper justify="space-between" align="center" wrap="wrap">
            <S.FooterLogo>
              <Logo />
              <p>lysy.ilya1313@gmail.com</p>
              <h3>{t("pages.footer.textLogo")}</h3>
            </S.FooterLogo>
            <S.FooterMedia>
              <h4>{t("pages.footer.media")}</h4>
              <ul>
                <li>
                  <a href="https://github.com/lysy1313">
                    <Icon
                      height="32px"
                      width="32px"
                      viewBox="0 0 32 32"
                      iconId="github"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/lysy_I">
                    <Icon
                      height="32px"
                      width="32px"
                      viewBox="0 0 32 32"
                      iconId="telegram"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://discord.com/channels/660813608757886991">
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
          <S.Copyright>© {t("pages.footer.copyright")} Lysy</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.StyledFooter>
  );
};
