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
  margin-bottom: 50px;
`;

const SquareRight = styled.span`
  width: 155px;
  height: 155px;
  border: 1px solid ${theme.colors.seconderyFont};

  position: absolute;
  right: -255px;
  bottom: 100px;

  display: none;
  /* box-shadow: 0 10px 5px -5px rgba(255, 255, 255, 0.36); */

  animation: rotateSquare 5s infinite ease-in-out;

  &:hover {
    animation-play-state: paused;
  }

  @media ${theme.media.desktop} {
    display: block;
  }

  @keyframes rotateSquare {
    0% {
      transform: rotateY(0) translateY(0);
    }

    50% {
      transform: rotateY(360deg) translateY(-295px);
    }

    100% {
      transform: rotateY(-360deg) translateY(0);
    }
  }
`;

const StyleBtnView = styled.a``;

//project
const StyledProject = styled.div`
  max-width: 330px;
  width: 100%;
  border: 0.5px solid ${theme.colors.seconderyFont};

  div {
    border-top: 0.5px solid ${theme.colors.seconderyFont};
    padding: 15px;
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
  line-height: 30px;
  padding: 0 8px 2px;
`;
const Parag = styled.p`
  letter-spacing: 0;
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
