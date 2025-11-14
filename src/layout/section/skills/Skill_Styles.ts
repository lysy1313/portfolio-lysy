import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

//skills
const StyledSkills = styled.section`
  @media ${theme.media.desktopMax} {
    ${FlexWrapper} {
      justify-content: center;
    }
  }
`;

const StyledSkillDiv = styled.div`
  max-width: 584px;
  width: 100%;
  margin-top: 40px;
`;

const ImgSkill = styled.img`
  width: 349px;
  margin-left: 32px;
  margin-top: 12px;
  object-fit: cover;
`;

//Skill cart
export const StyledSkillCart = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 200px));
  grid-template-rows: repeat(auto-fill, minmax(103px, 132px));
  gap: 10px;
  grid-template-areas:
    "lan dat too"
    ". oth fra";

  justify-content: center;

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
    width: 200px;
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
  padding: 8px;
`;
const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 5px;

  li {
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.seconderyFont};
  }
`;

export const S = {
  StyledSkills,
  StyledSkillDiv,
  ImgSkill,
  StyledSkillCart,
  GridSkillItem,
  SkillsColumn,
  CategoryTitle,
  SkillsList,
};
