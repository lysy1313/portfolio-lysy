import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import chertImg from "../../../assets/images/Chert.jpg";
import protectImg from "../../../assets/images/Protect.jpg";
import kahootImg from "../../../assets/images/Kahoot.jpg";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <FlexWrapper justify="space-between" align="center" wrap="wrap">
          <SectionTitle textTitle="projects" hightLine="511px" />
          <StyleBtnView href="">View all ~~&gt;</StyleBtnView>
        </FlexWrapper>

        <FlexWrapper justify="space-between" align="start" wrap="wrap">
          <Project
            cartImg={chertImg}
            headline="ChertNodes"
            textParag="Minecraft servers hosting"
            textTopic="HTML SCSS Python Flask"
            linkDis="inline"
            linkCached="#"
            linkLive="#"
          />
          <Project
            cartImg={protectImg}
            headline="ProtectX"
            textParag="Discord anti-crash bot"
            textTopic="React Express Discrod.js Node.js HTML SCSS Python Flask"
            linkDis="none"
            linkCached="#"
          />
          <Project
            cartImg={kahootImg}
            headline="Kahoot Answers Viewer"
            textParag="Get answers to your kahoot quiz"
            textTopic="CSS Express Node.js"
            linkDis="none"
            linkCached="#"
          />
        </FlexWrapper>
        <SquareRight></SquareRight>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;

const SquareRight = styled.span`
  width: 155px;
  height: 155px;
  border: 1px solid ${theme.colors.seconderyFont};

  position: absolute;
  right: -275px;
  bottom: 93px;
`;

const StyleBtnView = styled.a``;
