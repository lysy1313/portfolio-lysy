import styled from "styled-components";
import { theme } from "../../../../styles/theme";

interface SkillData {
  category: string;
  list: string[];
}

type SkillPropsType = { skillData: SkillData[] };

export const SkillCart = (props: SkillPropsType) => {
  return (
    <StyledSkillCart>
      {props.skillData.map((skillGroup, index: number) => {
        return (
          <SkillsColumn key={index}>
            <CategoryTitle>{skillGroup.category}</CategoryTitle>
            <SkillsList>
              {skillGroup.list.map((skill: string, skillIndex: number) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </SkillsList>
          </SkillsColumn>
        );
      })}
    </StyledSkillCart>
  );
};

const StyledSkillCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 10px;
  align-items: flex-end;
  flex-direction: column;
  align-content: flex-end;
`;
const SkillsColumn = styled.div`
  border: 1px solid ${theme.colors.seconderyFont};
  min-width: 180px;
  max-width: 200px;
  text-align: start;
  flex-wrap: wrap;

  &:nth-child(3) {
    order: -1;

    width: 200px;
  }
  &:nth-child(5) {
    order: -1;
    width: 200px;
  }
  &:nth-child(1) {
    order: 6;
    width: 180px;
  }
  &:nth-child(2),
  &:nth-child(4) {
    width: 180px;
  }
`;
const CategoryTitle = styled.h3`
  border-bottom: 1px solid ${theme.colors.seconderyFont};
`;
const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;

  li {
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.seconderyFont};
  }
`;
