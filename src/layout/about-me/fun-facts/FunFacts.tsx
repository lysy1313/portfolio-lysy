import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import funImg from "../../../assets/images/funImg.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";
import { Fade } from "react-awesome-reveal";

const funFactsData = [
  "I like winter more than summer",
  "I often bike with my friends",
  "I like pizza and pasta",
  "I was in Lithuania, Poland and Russia",
  "My favorite movie is The Green Mile",
  "I graduated from the Belarusian National Technical University",
];

export const FunFacts: React.FC = () => {
  return (
    <StyledFunFacts>
      <Container>
        <SectionTitle textTitle="my-fun-facts" hightLine="0" />
        <FlexWrapper wrap="wrap" gap="20px">
          <InfoFunFacts>
            <Fade cascade={true} damping={1.2} className="animate__hinge">
              {funFactsData.map((ffText) => {
                return <TextFunFacts>{ffText}</TextFunFacts>;
              })}
            </Fade>
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

const PageImg = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 2;
`;
const Img = styled.img``;
