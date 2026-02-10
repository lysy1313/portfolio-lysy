import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import funImg from "../../../assets/images/funImg.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const FunFacts: React.FC = () => {
  const { t } = useTranslation();

  const funFacts = t("pages.aboutMe.funFactsData", {
    returnObjects: true,
  }) as string[];
  return (
    <StyledFunFacts>
      <Container>
        <SectionTitle
          textTitle={t("global.titleSection.funFacts")}
          hightLine="0"
        />
        <FlexWrapper wrap="wrap" gap="20px">
          <InfoFunFacts>
            <Fade cascade={true} damping={1.2} className="animate__hinge">
              {funFacts.map((ffText, index: number) => {
                const parts = ffText.split(/(\*.*?\*)/g);
                const arrFFtext = parts.map((part, index) => {
                  if (part.startsWith("*") && part.endsWith("*")) {
                    return <strong key={index}>{part.slice(1, -1)}</strong>;
                  }
                  return part;
                });
                return <TextFunFacts key={index}>{arrFFtext}</TextFunFacts>;
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
