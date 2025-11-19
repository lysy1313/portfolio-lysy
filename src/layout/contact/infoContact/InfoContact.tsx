import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { S } from "../../section/contacts/Contacts_Styles";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/theme";

export const InfoContact: React.FC = () => {
  return (
    <StyledInfoContact>
      <Container>
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

          <FlexWrapper wrap="wrap">
            <S.MessagePage>
              <S.MessageText>Support me here</S.MessageText>
              <S.Message>
                <S.TextAdress>
                  <a href="">4149500120690030</a>
                </S.TextAdress>
              </S.Message>
            </S.MessagePage>
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
        </FlexWrapper>
      </Container>
    </StyledInfoContact>
  );
};

const StyledInfoContact = styled.section`
  /* margin: 50px 0 0; */
  padding: 0;
  ${S.MessagePage}:first-child {
    width: 186px;
    height: 82px;
  }

  @media ${theme.media.desktopMax} {
    ${FlexWrapper} {
      justify-content: center;
    }
  }
`;
