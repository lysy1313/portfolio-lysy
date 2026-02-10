import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import { Container } from "../../../../components/Container";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { SectionTitle } from "../../../../components/sectionTitle/SectionTitle";
import { theme } from "../../../../styles/theme";
import { useProjectsData } from "../../../section/projects/model/useProjectsData";
import { Project } from "../../../section/projects/project/Project";

export const CompletedApps: React.FC = () => {
  const { projectItems, t } = useProjectsData();
  return (
    <StyledCompletedApps>
      <Container>
        <SectionTitle
          textTitle={t("global.titleSection.completedApps")}
          hightLine="0"
        />
        <FlexWrapper align="start" wrap="wrap">
          <Fade cascade={true} damping={0.1}>
            {projectItems.map((proj, index: number) => {
              return (
                <Project
                  key={index}
                  cartImg={proj.cartImg}
                  textTopic={proj.textTopic}
                  headline={proj.headline}
                  textParag={proj.textParag}
                  linkLive={proj.linkLive}
                  linkCached={proj.linkCached}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </StyledCompletedApps>
  );
};

const StyledCompletedApps = styled.section`
  ${FlexWrapper} {
    margin-top: 50px;
  }

  @media ${theme.media.desktopMax} {
    ${FlexWrapper} {
      justify-content: space-around;
    }
  }
`;
