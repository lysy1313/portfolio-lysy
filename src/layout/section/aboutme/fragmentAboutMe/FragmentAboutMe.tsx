// FragmentAboutMe.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { S } from "../AboutMe_Styles";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { StyledLinkBtn } from "../../../../components/LinkBtn";
import imgMan2 from "../../../../assets/images/Man1.png";
import dotsImg from "../../../../assets/images/Dots.svg";
import miniDotsImg from "../../../../assets/images/Dote 4x5.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { Fade } from "react-awesome-reveal";

type FragmentAboutMeTypeProps = {
  displayTrue?: boolean;
};

export const FragmentAboutMe: React.FC<FragmentAboutMeTypeProps> = (
  props: FragmentAboutMeTypeProps,
) => {
  const { t } = useTranslation(); // Хук для перевода

  return (
    <StyledFragmentAboutMe>
      <FlexWrapper
        justify="space-between"
        align="flex-start"
        wrap="wrap"
        gap="0"
      >
        <FlexWrapper
          justify="space-start"
          align="flex-start"
          direction="column"
          gap="25px"
        >
          <Fade cascade={true} damping={-0.1} direction="left">
            <S.TextAbout>
              {t("pages.fragmentAboutMe.aboutMe.hello")} <br />
              <br />
              {t("pages.fragmentAboutMe.aboutMe.description1")} <br />
              <br />
              {t("pages.fragmentAboutMe.aboutMe.description2")} <br />
              <br />
              {t("pages.fragmentAboutMe.aboutMe.passion")}
            </S.TextAbout>
            {props.displayTrue ? (
              <Link
                to={"/portfolio-lysy/about-me"}
                onClick={() => animateScroll.scrollToTop()}
              >
                <StyledLinkBtn $primary>
                  {t("pages.fragmentAboutMe.buttons.readMore")} &rarr;
                </StyledLinkBtn>
              </Link>
            ) : (
              false
            )}
          </Fade>
        </FlexWrapper>
        <Fade cascade={true} damping={0.1} direction="right">
          <S.ImgDiv>
            <S.Dots
              src={dotsImg}
              alt={t("pages.fragmentAboutMe.altText.dots")}
            />
            <S.ImgMan
              src={imgMan2}
              alt={t("pages.fragmentAboutMe.altText.man")}
            />
            <S.MiniDots
              src={miniDotsImg}
              alt={t("pages.fragmentAboutMe.altText.miniDots")}
            />
          </S.ImgDiv>
        </Fade>
      </FlexWrapper>
    </StyledFragmentAboutMe>
  );
};

const StyledFragmentAboutMe = styled.div`
  @media screen and (max-width: 887px) {
    ${FlexWrapper} {
      justify-content: center;
    }
  }
`;
