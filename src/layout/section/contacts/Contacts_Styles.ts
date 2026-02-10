import styled from "styled-components";
import { theme } from "../../../styles/theme";
import dotsWidthImg from "../../../assets/images/DotsWidth.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";

const StyledContacts = styled.section`
  padding: 60px 0 140px;
  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      justify-content: center;
    }
  }
`;

const TextContacts = styled.p`
  max-width: 505px;
  text-align: start;
  margin-top: 50px;

  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  position: relative;

  &::before {
    content: url("${dotsWidthImg}");
    position: absolute;
    top: 0;
    left: -220px;
    transform-origin: left bottom;
    animation: rotateDots 5s infinite ease-in-out;

    @keyframes rotateDots {
      0% {
        transform: rotateY(0);
      }

      50% {
        transform: rotateY(-180deg);
      }

      100% {
        transform: rotateY(0);
      }
    }

    @media ${theme.media.tablet} {
      display: none;
    }
  }
`;

const MessagePage = styled.div`
  border: 0.5px solid ${theme.colors.seconderyFont};
  width: 300px;
  min-height: 140px;

  padding: 16px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const MessageText = styled.p`
  color: ${theme.colors.font};
`;
const Message = styled.ul`
  text-align: start;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const TextAdress = styled.li`
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${theme.colors.seconderyFont};
    transition: all 0.5s ease;
    svg {
      transition: all 0.5s ease;
    }
  }

  a:hover {
    color: ${theme.colors.font};
  }
  a:hover svg {
    fill: ${theme.colors.font};
  }
`;

export const S = {
  StyledContacts,
  TextContacts,
  MessagePage,
  Message,
  MessageText,
  TextAdress,
};
