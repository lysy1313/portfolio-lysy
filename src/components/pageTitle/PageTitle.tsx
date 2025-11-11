import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { theme } from "../../styles/theme";

type PageTitlePropsType = {
  titlePage: string;
  textTitlePage: string;
};

export const PageTitle = (props: PageTitlePropsType) => {
  return (
    <StyledPageTitle>
      <Container>
        <StyledH2>
          <span>/</span>
          {props.titlePage}
        </StyledH2>
        <PageTitleText>{props.textTitlePage}</PageTitleText>
      </Container>
    </StyledPageTitle>
  );
};

const StyledPageTitle = styled.div`
  margin: 120px 0 50px;
`;

const StyledH2 = styled.h2`
  color: ${theme.colors.font};
  text-align: start;
  position: relative;
  font-size: 32px;

  span {
    color: ${theme.colors.accent};
  }
`;

const PageTitleText = styled.p`
  margin-top: 14px;
`;
