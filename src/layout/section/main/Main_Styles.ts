import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

//main
const StyledMain = styled.main`
  min-height: 100vh;

  ${Container} {
    display: flex;
    flex-direction: column;
    gap: 112px;
  }

  @media ${theme.media.desktopMax} {
    ${FlexWrapper} {
      flex-direction: column;
      justify-content: center;
      flex-wrap: nowrap;

      padding-top: 20px;
    }
  }
`;

const StyledDiv = styled.div`
  max-width: 537px;

  h1 {
    font-size: 32px;
  }

  p {
    line-height: 25px;
    height: 50px;
    margin: 32px 0 24px;
  }
`;

const StyledStrong = styled.strong`
  color: ${theme.colors.accent};
`;

const ImgPage = styled.div`
  position: relative;
  width: 469px;
  height: 406px;
  display: flex;
  align-items: center;

  @media ${theme.media.mobile} {
    width: 316px;
    height: 260px;
  }
`;

const ImgMan = styled.img`
  max-width: 457px;
  width: 100%;
  height: 386px;
  object-fit: cover;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;

  @media ${theme.media.mobile} {
    max-width: 307px;
    width: 100%;
    height: 260px;
  }
`;

const ImgLogo = styled.img`
  width: 155px;
  height: 155px;
  object-fit: cover;
  background-color: transparent;
  position: absolute;
  left: 0px;
  top: 84px;
  z-index: 0;

  @media ${theme.media.mobile} {
    width: 104px;
    height: 104px;
  }
`;

const ParDiv = styled.div`
  border: 1px solid ${theme.colors.seconderyFont};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  max-width: 402px;
  width: 100%;
  padding: 5px;

  p {
    text-align: start;
  }

  @media ${theme.media.mobile} {
    width: 320px;
    height: 58px;
    white-space: pre-wrap;
  }
`;

const Square = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${theme.colors.accent};
`;

const DoteDiv = styled.div`
  background-color: transparent;
  position: absolute;
  right: 16px;
  bottom: 56px;
  z-index: 2;
  svg {
    background-color: transparent;
  }

  @media ${theme.media.mobile} {
    width: 57px;
    height: 57px;
    transform: scale(0.7);
  }
`;

// Quote
const StyledFieldSet = styled.div`
  border: 1px solid ${theme.colors.seconderyFont};
  margin: 0;
  position: relative;
  padding: 32px;

  &:nth-child(1)::before {
    content: "";
    width: 91px;
    height: 91px;
    border: 1px solid ${theme.colors.seconderyFont};

    position: absolute;
    top: 15px;
    right: -340px;
    display: none;

    animation: rotateXSquare 5s infinite ease-in-out;

    &:hover {
      animation-play-state: paused;
    }
    @keyframes rotateXSquare {
      0% {
        transform: rotate(0) translateY(0);
      }

      50% {
        transform: rotate(180deg) translateY(-175px);
      }

      100% {
        transform: rotate(-180deg) translateY(0);
      }
    }

    @media ${theme.media.desktop} {
      display: block;
    }
  }
  &:nth-child(2) {
    border-top: none;
    margin: 0;
    padding: 20px;
  }
`;

const IconLeft = styled.span`
  position: absolute;
  top: -15px;
  left: 15px;
`;
const IconRight = styled.span`
  position: absolute;
  top: -15px;
  right: 15px;
  background-color: transparent;
`;

const TextQuote = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: ${theme.colors.font};
`;

const NameTextQuote = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  color: ${theme.colors.font};
`;

export const S = {
  StyledMain,
  StyledDiv,
  StyledStrong,
  ImgPage,
  ImgMan,
  ImgLogo,
  ParDiv,
  Square,
  DoteDiv,
  StyledFieldSet,
  IconLeft,
  IconRight,
  TextQuote,
  NameTextQuote,
};
