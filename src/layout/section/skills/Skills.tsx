import React from "react";
import { Fade } from "react-awesome-reveal";
import ImageSkill from "../../../assets/images/ImageSkill.png";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { useSkillsData } from "./model/useSkillsData";
import { SkillCart } from "./skill/SkillCart";
import { S } from "./Skill_Styles";

export const Skills: React.FC = () => {
  const { skillsData, t } = useSkillsData();
  return (
    <S.StyledSkills>
      <Container>
        <SectionTitle
          textTitle={t("global.titleSection.skills")}
          hightLine="20%"
        />

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
