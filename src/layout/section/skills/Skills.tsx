import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { SkillCart } from "./skill/SkillCart";
import { FlexWrapper } from "../../../components/FlexWrapper";
import ImageSkill from "../../../assets/images/ImageSkill.png";
import { Container } from "../../../components/Container";
import { S } from "./Skill_Styles";
import React from "react";
import { Fade } from "react-awesome-reveal";

export const skillsData = [
  {
    category: "Languages",
    list: ["TypeScript", "JavaScript"],
  },
  {
    category: "Databases",
    list: ["PostgreSQL", "Monogo"],
  },
  {
    category: "Tools",
    list: ["VSCode", "Figma", "Git", "Git Bash", "Material UI"],
  },
  {
    category: "Other",
    list: ["HTML", "CSS", "SASS", "SCSS", "Styled components"],
  },
  {
    category: "Frameworks",
    list: ["React"],
  },
];

export const Skills: React.FC = () => {
  return (
    <S.StyledSkills>
      <Container>
        <SectionTitle textTitle="skills" hightLine="20%" />

        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          <Fade cascade={true} damping={-0.1} direction="left">
            <S.ImgSkill src={ImageSkill} />
          </Fade>
          <Fade cascade={true} damping={-0.1} direction="right">
            <S.StyledSkillDiv>
              <SkillCart skillData={skillsData} />
            </S.StyledSkillDiv>
          </Fade>
        </FlexWrapper>
      </Container>
    </S.StyledSkills>
  );
};
