import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import imgMan2 from "../../../assets/images/Man1.png";
import dotsImg from "../../../assets/images/Dots.svg";
import dotsWidthImg from "../../../assets/images/DotsWidth.svg";
import miniDotsImg from "../../../assets/images/Dote 4x5.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/theme";
import { StyledLinkBtn } from "../../../components/LinkBtn";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
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
            gap="10px"
          >
            <TextAbout>
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
            </TextAbout>
            <StyledLinkBtn href="" primary>
              Read more &rarr;
            </StyledLinkBtn>
          </FlexWrapper>
          <ImgDiv>
            <Dots src={dotsImg} alt="Мужик с закрытым лицом" />
            <ImgMan src={imgMan2} alt="Мужик с закрытым лицом" />
            <MiniDots src={miniDotsImg} alt="Мужик с закрытым лицом" />
          </ImgDiv>
        </FlexWrapper>
      </Container>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section`
  max-height: 100vh;
`;

const TextAbout = styled.p`
  max-width: 515px;
  text-align: start;
  margin-top: 20px;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    width: 155px;
    height: 155px;
    border: 1px solid ${theme.colors.seconderyFont};

    position: absolute;
    top: 50px;
    left: -45%;
  }
`;

const ImgDiv = styled.div`
  width: 343px;
  height: 508px;
  position: relative;
  top: -50px;

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
