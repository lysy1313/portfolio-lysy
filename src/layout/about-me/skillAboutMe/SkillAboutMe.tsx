import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { theme } from "../../../styles/theme";
import { useSkillsData } from "../../section/skills/model/useSkillsData";
import { SkillCart } from "../../section/skills/skill/SkillCart";
import { StyledSkillCart } from "../../section/skills/Skill_Styles";

export const SkillAboutMe: React.FC = () => {
  const { skillsData, t } = useSkillsData();
  return (
    <StyledSkillAboutMe>
      <Container>
        <SectionTitle
          textTitle={t("global.titleSection.skills")}
          hightLine="0"
        />
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
