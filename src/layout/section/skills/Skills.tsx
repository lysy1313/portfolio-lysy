import { SectionTitle } from "../../../components/SectionTitle";
import { SkillCart } from "./skill/SkillCart";
import { FlexWrapper } from "../../../components/FlexWrapper";
import ImageSkill from "../../../assets/images/ImageSkill.png";
import { Container } from "../../../components/Container";
import { S } from "./Skill_Styles";
import React from "react";

const skillsData = [
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
          <S.ImgSkill src={ImageSkill} />
          <S.StyledSkillDiv>
            <SkillCart skillData={skillsData} />
          </S.StyledSkillDiv>
        </FlexWrapper>
      </Container>
    </S.StyledSkills>
  );
};
