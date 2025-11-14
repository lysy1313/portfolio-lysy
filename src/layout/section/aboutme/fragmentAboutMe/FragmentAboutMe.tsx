import React from "react";
import { S } from "../AboutMe_Styles";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { StyledLinkBtn } from "../../../../components/LinkBtn";
import imgMan2 from "../../../../assets/images/Man1.png";
import dotsImg from "../../../../assets/images/Dots.svg";
import miniDotsImg from "../../../../assets/images/Dote 4x5.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

type FragmentAboutMeTypeProps = {
  displayTrue?: boolean;
};

export const FragmentAboutMe: React.FC<FragmentAboutMeTypeProps> = (
  props: FragmentAboutMeTypeProps
) => {
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
          <S.TextAbout>
            Hello, i’m Elias! <br />
            <br />
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. <br />
            <br />
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </S.TextAbout>
          {props.displayTrue ? (
            <Link to={"/about-me"}>
              <StyledLinkBtn href="" primary>
                Read more &rarr;
              </StyledLinkBtn>
            </Link>
          ) : (
            false
          )}
        </FlexWrapper>
        <S.ImgDiv>
          <S.Dots src={dotsImg} alt="Мужик с закрытым лицом" />
          <S.ImgMan src={imgMan2} alt="Мужик с закрытым лицом" />
          <S.MiniDots src={miniDotsImg} alt="Мужик с закрытым лицом" />
        </S.ImgDiv>
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
