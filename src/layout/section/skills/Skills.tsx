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
    list: ["TypeScript", "Lua", "Python", "JavaScript"],
  },
  {
    category: "Databases",
    list: ["SQLite", "PostgreSQL", "Mongo"],
  },
  {
    category: "Tools",
    list: [
      "VSCode",
      "Neovim",
      "Linux",
      "Figma",
      "XFCE",
      "Arch",
      "Git",
      "Font Awesome",
    ],
  },
  {
    category: "Other",
    list: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
  },
  {
    category: "Frameworks",
    list: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"],
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
