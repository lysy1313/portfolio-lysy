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
          <GridSkillItem>
            <SkillsColumn key={index}>
              <CategoryTitle>{skillGroup.category}</CategoryTitle>
              <SkillsList>
                {skillGroup.list.map((skill: string, skillIndex: number) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </SkillsList>
            </SkillsColumn>
          </GridSkillItem>
        );
      })}
    </StyledSkillCart>
  );
};

const StyledSkillCart = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 200px));
  grid-template-rows: repeat(auto-fit, minmax(103px, 132px));
  gap: 10px;
  grid-template-areas:
    "lan dat too"
    ". oth fra";

  @media ${theme.media.mobile} {
    grid-template-areas:
      "fra dat "
      "too lan"
      ". oth";
  }
`;

const GridSkillItem = styled.div`
  &:nth-child(1) {
    grid-area: lan;
  }
  &:nth-child(2) {
    grid-area: dat;
  }
  &:nth-child(3) {
    grid-area: too;
  }
  &:nth-child(4) {
    transform: translateY(-30px);
    grid-area: oth;

    @media ${theme.media.mobile} {
      transform: translateY(0);
    }
  }
  &:nth-child(5) {
    grid-area: fra;
  }
`;

const SkillsColumn = styled.div`
  border: 1px solid ${theme.colors.seconderyFont};
  min-width: 180px;
  max-width: 200px;
  text-align: start;
  @media ${theme.media.mobile} {
    min-width: 100px;
    max-width: 180px;
  }
`;
const CategoryTitle = styled.h3`
  border-bottom: 1px solid ${theme.colors.seconderyFont};
  padding-left: 8px;
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
