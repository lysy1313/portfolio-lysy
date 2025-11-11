import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import imgMan2 from "../../../assets/images/Man1.png";
import dotsImg from "../../../assets/images/Dots.svg";
import miniDotsImg from "../../../assets/images/Dote 4x5.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledLinkBtn } from "../../../components/LinkBtn";
import { S } from "./AboutMe_Styles";
import React from "react";

export const AboutMe: React.FC = () => {
  return (
    <S.StyledAboutMe>
      <Container>
        <SectionTitle textTitle="about-me" hightLine="30%" />
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
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences. <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </S.TextAbout>
            <StyledLinkBtn href="" primary>
              Read more &rarr;
            </StyledLinkBtn>
          </FlexWrapper>
          <S.ImgDiv>
            <S.Dots src={dotsImg} alt="Мужик с закрытым лицом" />
            <S.ImgMan src={imgMan2} alt="Мужик с закрытым лицом" />
            <S.MiniDots src={miniDotsImg} alt="Мужик с закрытым лицом" />
          </S.ImgDiv>
        </FlexWrapper>
      </Container>
    </S.StyledAboutMe>
  );
};
