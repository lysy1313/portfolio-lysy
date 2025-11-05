import React from "react";
import { S } from "../Skill_Styles";

interface SkillData {
  category: string;
  list: string[];
}

type SkillPropsType = { skillData: SkillData[] };

export const SkillCart: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.StyledSkillCart>
      {props.skillData.map((skillGroup, index: number) => {
        return (
          <S.GridSkillItem>
            <S.SkillsColumn key={index}>
              <S.CategoryTitle>{skillGroup.category}</S.CategoryTitle>
              <S.SkillsList>
                {skillGroup.list.map((skill: string, skillIndex: number) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </S.SkillsList>
            </S.SkillsColumn>
          </S.GridSkillItem>
        );
      })}
    </S.StyledSkillCart>
  );
};
