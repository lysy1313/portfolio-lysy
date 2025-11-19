import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import funImg from "../../../assets/images/funImg.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";

export const FunFacts: React.FC = () => {
  return (
    <StyledFunFacts>
      <Container>
        <SectionTitle textTitle="my-fun-facts" hightLine="0" />
        <FlexWrapper wrap="wrap">
          <InfoFunFacts>
            <TextFunFacts>I like winter more than summer</TextFunFacts>
            <TextFunFacts>I often bike with my friends</TextFunFacts>
            <TextFunFacts>
              I like <Strong>pizza</Strong> and <Strong>pasta</Strong>{" "}
            </TextFunFacts>
            <TextFunFacts>
              I was in <Strong>Egypt</Strong>, <Strong>Poland</Strong> and{" "}
              <Strong>Turkey</Strong>
            </TextFunFacts>
            <TextFunFacts>
              My favorite movie is <Strong>The Green Mile</Strong>
            </TextFunFacts>
            <TextFunFacts>I am still in school</TextFunFacts>
            <TextFunFacts>I don’t have any siblings</TextFunFacts>
          </InfoFunFacts>
          <PageImg>
            <Img src={funImg} />
          </PageImg>
        </FlexWrapper>
      </Container>
    </StyledFunFacts>
  );
};

const StyledFunFacts = styled.section`
  padding: 60px 0 140px;
  ${FlexWrapper} {
    margin-top: 30px;
  }

  @media ${theme.media.desktopMax} {
    ${FlexWrapper} {
      justify-content: center;
    }
  }
`;
const InfoFunFacts = styled.div`
  max-width: 605px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: start;
  gap: 16px;

  flex-grow: 1;
`;
const TextFunFacts = styled.p`
  border: 1px solid ${theme.colors.font};
  line-height: 100%;
  padding: 8px;
`;
const Strong = styled.span``;

const PageImg = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 2;
`;
const Img = styled.img``;
