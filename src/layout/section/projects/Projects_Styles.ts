import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

//Projects
const StyledProjects = styled.section`
  @media ${theme.media.desktop} {
    ${FlexWrapper} {
      justify-content: space-between;
    }
  }
`;

const StyledProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SquareRight = styled.span`
  width: 155px;
  height: 155px;
  border: 1px solid ${theme.colors.seconderyFont};

  position: absolute;
  right: -255px;
  bottom: 100px;

  display: none;

  @media ${theme.media.desktop} {
    display: block;
  }
`;

const StyleBtnView = styled.a``;

//project
const StyledProject = styled.div`
  max-width: 330px;
  width: 100%;
  border: 0.5px solid ${theme.colors.seconderyFont};
  margin-top: 50px;

  div {
    border-top: 0.5px solid ${theme.colors.seconderyFont};
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }

  .divBtn {
    display: flex;
    flex-direction: row;
    border: none;
    padding: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 0.5px solid ${theme.colors.seconderyFont};
`;
const ListTopic = styled.p`
  text-align: start;
  padding: 8px;
`;
const Parag = styled.p`
  letter-spacing: 0.1;
  line-height: 100%;
`;
const StyledH4 = styled.h4`
  font-weight: 500;
  font-size: 24px;
`;

export const S = {
  StyledProjects,
  StyledProjectTitle,
  SquareRight,
  StyleBtnView,
  StyledProject,
  Img,
  ListTopic,
  Parag,
  StyledH4,
};
