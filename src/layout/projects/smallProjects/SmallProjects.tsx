/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import styled from "styled-components";
import { Project } from "../../section/projects/project/Project";
import { S } from "../../section/projects/Projects_Styles";
import { theme } from "../../../styles/theme";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const smallProjectItems: any[] = [];

export const SmallProjects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledSmallProjects>
      <Container>
        <SectionTitle
          textTitle={t("global.titleSection.smallProjects")}
          hightLine="0"
        />
        <GridSmallProjects>
          <Fade
            cascade={true}
            damping={0.1}
            triggerOnce={true}
            direction={"up"}
          >
            {smallProjectItems.length === 0 ? (
              <span>Under development</span>
            ) : (
              smallProjectItems.map((smProj, index: number) => {
                return (
                  <div key={index}>
                    <Project
                      textTopic={smProj.textTopic}
                      headline={smProj.headline}
                      textParag={smProj.textParag}
                      linkLive={smProj.linkLive}
                    />
                  </div>
                );
              })
            )}
          </Fade>
        </GridSmallProjects>
      </Container>
    </StyledSmallProjects>
  );
};

const StyledSmallProjects = styled.section`
  ${S.Img} {
    display: none;
  }
`;
const GridSmallProjects = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 331px);
  grid-template-rows: repeat(auto-fill, auto);
  gap: 16px;
  @media ${theme.media.desktopMax} {
    justify-content: space-around;
  }
`;
