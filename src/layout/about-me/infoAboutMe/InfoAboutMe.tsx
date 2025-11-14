import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FragmentAboutMe } from "../../section/aboutme/fragmentAboutMe/FragmentAboutMe";

export const InfoAboutMe: React.FC = () => {
  return (
    <StyledInfoAboutMe>
      <Container>
        <FragmentAboutMe />
      </Container>
    </StyledInfoAboutMe>
  );
};

const StyledInfoAboutMe = styled.section``;
