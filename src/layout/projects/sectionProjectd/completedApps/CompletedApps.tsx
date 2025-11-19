import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../components/sectionTitle/SectionTitle";
import { Container } from "../../../../components/Container";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { projectItems } from "../../../section/projects/Projects";
import { Project } from "../../../section/projects/project/Project";
import { theme } from "../../../../styles/theme";

export const CompletedApps: React.FC = () => {
  return (
    <StyledCompletedApps>
      <Container>
        <SectionTitle textTitle="completed-apps" hightLine="0" />
        <FlexWrapper align="start" wrap="wrap">
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
