import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SkillCart } from "./skill/SkillCart";
import { FlexWrapper } from "../../../components/FlexWrapper";
import ImageSkill from "../../../assets/images/ImageSkill.png";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle textTitle="skills" />

      <FlexWrapper justify="center" align="center" wrap="wrap">
        <ImgSkill src={ImageSkill} />
        <StyledSkillDiv>
          <SkillCart
            skillType="Languages"
            skillLang="TypeScript Lua Python JavaScript"
          />
          <SkillCart
            skillType="Databases"
            skillLang="SQLite PostgreSQL Mongo"
          />
          <SkillCart
            skillType="Tools"
            skillLang="VSCode Neovim Linux Lua Figma XFCE Arch Git Font Awesome"
          />
          <SkillCart
            skillType="Other"
            skillLang="HTML CSS EJS SCSS REST Jinja JavaScript"
          />
          <SkillCart
            skillType="Frameworks"
            skillLang="React Vue Lua Lua Disnake Discord.js JavaScript Flask Express.js"
          />
        </StyledSkillDiv>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  max-height: 60vh;
  background-color: #444444;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledSkillDiv = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
`;

const ImgSkill = styled.img`
  width: 282px;
`;
