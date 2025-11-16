import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Container } from "../../../components/Container";
import { S } from "../../section/contacts/Contacts_Styles";
import { Icon } from "../../../components/icon/Icon";

export const AllMedia = () => {
  return (
    <StyledAllMedia>
      <Container>
        <SectionTitle textTitle="all-media" hightLine="0" />
        <S.Message>
          <S.TextAdress>
            <a href="">
              <Icon
                iconId="github"
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
                iconId="telegram"
                height="32px"
                width="32px"
                viewBox="0 0 32 32"
              />
              elias@elias.me
            </a>
          </S.TextAdress>
        </S.Message>
      </Container>
    </StyledAllMedia>
  );
};

const StyledAllMedia = styled.section`
  padding: 25px 0 80px;
  ${S.Message} {
    width: 100%;
    margin-top: 22px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 22px;
  }
`;
