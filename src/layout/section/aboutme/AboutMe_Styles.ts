import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/theme";
import dotsWidthImg from "../../../assets/images/DotsWidth.svg";

const StyledAboutMe = styled.section`
  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      justify-content: center;
    }
  }
`;

const TextAbout = styled.p`
  max-width: 515px;
  text-align: start;
  margin-top: 20px;
  display: inline-block;
  position: relative;
`;

const ImgDiv = styled.div`
  width: 343px;
  height: 508px;
  position: relative;
  top: -50px;

  @media screen and (max-width: 887px) {
    top: 10px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    transform: translate(15%);
    width: 271px;
    height: 1px;
    background-color: ${theme.colors.accent};
  }

  &::before {
    content: url("${dotsWidthImg}");
    position: absolute;
    bottom: 100px;
    right: -190px;
    display: none;

    animation: rotateDots 5s infinite linear;

    &:hover {
      animation-play-state: paused;
    }
    @keyframes rotateDots {
      0% {
        transform: rotateY(0);
      }

      50% {
        transform: rotateY(360deg);
      }

      100% {
        transform: rotateY(0);
      }
    }

    @media screen and (max-width: 1530px) {
      animation: none;
    }

    @media ${theme.media.desktop} {
      display: block;
    }
  }
`;

const ImgMan = styled.img`
  background-color: transparent;
  object-fit: cover;
`;

const Dots = styled.img`
  background-color: transparent;
  position: absolute;
  top: 60px;
`;
const MiniDots = styled.img`
  background-color: transparent;
  position: absolute;
  right: 16px;
  bottom: 170px;
`;

export const S = {
  StyledAboutMe,
  TextAbout,
  ImgDiv,
  ImgMan,
  Dots,
  MiniDots,
};
