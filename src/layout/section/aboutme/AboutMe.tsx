import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import imgMan2 from "../../../assets/images/Man1.png";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
        <SectionTitle textTitle="about-me" hightLine="30%" />
        <FlexWrapper justify="space-between" align="center" wrap="wrap" gap="0">
          <FlexWrapper
            justify="flex-start"
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
            <Button text="Read more &rarr;" />
          </FlexWrapper>
          <ImgDiv>
            <img src={imgMan2} alt="Мужик с закрытым лицом" />
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
`;

const ImgDiv = styled.div`
  width: 343px;
  width: 508px;
`;
