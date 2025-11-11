import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Contacts_Styles";
import React from "react";

export const Contacts: React.FC = () => {
  return (
    <S.StyledContacts>
      <Container>
        <SectionTitle textTitle="contacts" hightLine="15%" />
        <FlexWrapper
          justify="space-between"
          align="space-around"
          wrap="wrap"
          gap="16px"
        >
          <FlexWrapper justify="flex-start" align="flex-start">
            <S.TextContacts>
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </S.TextContacts>
          </FlexWrapper>

          <S.MessagePage>
            <S.MessageText>Message me here</S.MessageText>
            <S.Message>
              <S.TextAdress>
                <a href="">
                  <Icon
                    iconId="discord"
                    height="32px"
                    width="32px"
                    viewBox="0 0 32 32"
                  />
                  !Elias#3519
                </a>
              </S.TextAdress>
              <S.TextAdress>
                <a href="">
                  <Icon
                    iconId="email"
                    height="32px"
                    width="32px"
                    viewBox="0 0 32 32"
                  />
                  elias@elias.me
                </a>
              </S.TextAdress>
            </S.Message>
          </S.MessagePage>
        </FlexWrapper>
      </Container>
    </S.StyledContacts>
  );
};
