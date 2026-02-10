import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Contacts_Styles";
import React from "react";
import { useTranslation } from "react-i18next";

export const Contacts: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.StyledContacts>
      <Container>
        <SectionTitle
          textTitle={t("global.titleSection.contacts")}
          hightLine="15%"
        />
        <FlexWrapper
          justify="space-between"
          align="space-around"
          wrap="wrap"
          gap="16px"
        >
          <FlexWrapper justify="flex-start" align="flex-start">
            <S.TextContacts>{t("pages.contact.textContacts")}</S.TextContacts>
          </FlexWrapper>

          <S.MessagePage>
            <S.MessageText>
              {t("pages.contact.messageText.message")}
            </S.MessageText>
            <S.Message>
              <S.TextAdress>
                <a href="https://discord.com/channels/660813608757886991">
                  <Icon
                    iconId="discord"
                    height="32px"
                    width="32px"
                    viewBox="0 0 32 32"
                  />
                  lysy.i
                </a>
              </S.TextAdress>
              <S.TextAdress>
                <a href="mailto:lysy.ilya1313@gmail.com">
                  <Icon
                    iconId="email"
                    height="32px"
                    width="32px"
                    viewBox="0 0 32 32"
                  />
                  lysy.ilya1313@gmail.com
                </a>
              </S.TextAdress>
            </S.Message>
          </S.MessagePage>
        </FlexWrapper>
      </Container>
    </S.StyledContacts>
  );
};
