import React from "react";
import styled from "styled-components";
import { StyledSkillCart } from "../../section/skills/Skill_Styles";
import { theme } from "../../../styles/theme";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { SkillCart } from "../../section/skills/skill/SkillCart";
import { skillsData } from "../../section/skills/Skills";

export const SkillAboutMe = () => {
  return (
    <StyledSkillAboutMe>
      <Container>
        <SectionTitle textTitle="skills" hightLine="0px" />
        <SkillCart skillData={skillsData} />
      </Container>
    </StyledSkillAboutMe>
  );
};

const StyledSkillAboutMe = styled.section`
  ${StyledSkillCart} {
    margin-top: 50px;
    grid-template-areas: "lan dat too oth fra";

    div:nth-child(4) {
      transform: translateY(0);
    }

    @media ${theme.media.desktopMax} {
      justify-content: center;
      grid-template-areas:
        "lan dat too"
        ". oth fra";
    }

    @media ${theme.media.mobile} {
      grid-template-areas:
        "fra dat "
        "too lan"
        ". oth";
    }
  }
`;
