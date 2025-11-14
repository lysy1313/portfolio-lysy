import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";

import { S } from "./AboutMe_Styles";
import React from "react";
import { FragmentAboutMe } from "./fragmentAboutMe/FragmentAboutMe";
import styled from "styled-components";
import { Cube } from "../../../components/cube/Cube";
import { theme } from "../../../styles/theme";

export const AboutMe: React.FC = () => {
  return (
    <S.StyledAboutMe>
      <Container>
        <PositionCube>
          <Cube />
        </PositionCube>
        <SectionTitle textTitle="about-me" hightLine="30%" />
        <FragmentAboutMe displayTrue />
      </Container>
    </S.StyledAboutMe>
  );
};

const PositionCube = styled.div`
  position: absolute;
  top: 50px;
  left: -350px;
  display: none;

  @media ${theme.media.desktop} {
    display: block;
  }

  /* &::after {
    content: "";
    width: 155px;
    height: 155px;
    border: 1px solid ${theme.colors.seconderyFont};
  } */
`;
