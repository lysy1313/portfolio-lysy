import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import { Container } from "../../../components/Container";
import { S } from "./Projects_Styles";
import React from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { useProjectsData } from "./model/useProjectsData";

export const Projects: React.FC = () => {
  const { projectItems, t } = useProjectsData();

  return (
    <S.StyledProjects>
      <Container>
        <S.StyledProjectTitle>
          <SectionTitle
            textTitle={t("global.titleSection.projects")}
            hightLine="50%"
          />
          <Link
            to={"/portfolio-lysy/works"}
            onClick={() => animateScroll.scrollToTop()}
          >
            {t("global.links.viewAll")} ~~&gt;
          </Link>
        </S.StyledProjectTitle>

        <FlexWrapper justify="space-around" align="start" wrap="wrap">
          <Fade cascade={true} damping={0.1}>
            {projectItems.map((proj, index: number) => {
              if (index < 3) {
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
              }
            })}
          </Fade>
        </FlexWrapper>
        <S.SquareRight />
      </Container>
    </S.StyledProjects>
  );
};
