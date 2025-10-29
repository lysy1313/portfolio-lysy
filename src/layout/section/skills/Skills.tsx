import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SkillCart } from "./skill/SkillCart";
import { FlexWrapper } from "../../../components/FlexWrapper";
import ImageSkill from "../../../assets/images/ImageSkill.png";
import { Container } from "../../../components/Container";

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

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle textTitle="skills" hightLine="20%" />

        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          <ImgSkill src={ImageSkill} />
          <FlexWrapper justify="space-between" align="center" wrap="wrap">
            <StyledSkillDiv>
              <SkillCart skillData={skillsData} />
            </StyledSkillDiv>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  /* max-height: 60vh; */
`;

const StyledSkillDiv = styled.div`
  width: 584px;
  height: 280px;
  margin-top: 12px;
`;

const ImgSkill = styled.img`
  width: 282px;
  margin-left: 32px;
  margin-top: 12px;
`;
