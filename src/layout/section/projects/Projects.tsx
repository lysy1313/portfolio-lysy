import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import chertImg from "../../../assets/images/Chert.jpg";
import protectImg from "../../../assets/images/Protect.jpg";
import kahootImg from "../../../assets/images/Kahoot.jpg";

export const Projects = () => {
  return (
    <StyledProjects>
      <FlexWrapper justify="space-around" align="center" wrap="wrap">
        <SectionTitle textTitle="projects" />
        <StyleBtnView href="">View all ~~&gt;</StyleBtnView>
      </FlexWrapper>

      <FlexWrapper justify="center" align="space-around" wrap="wrap">
        <Project
          cartImg={chertImg}
          headline="HTML SCSS Python Flask"
          textParag="Minecraft servers hosting"
          textTopic="ChertNodes"
        />
        <Project
          cartImg={protectImg}
          headline="ProtectX"
          textParag="Discord anti-crash bot"
          textTopic="React Express Discrod.js Node.js HTML SCSS Python Flask"
        />
        <Project
          cartImg={kahootImg}
          headline="Kahoot Answers Viewer"
          textParag="Get answers to your kahoot quiz"
          textTopic="CSS Express Node.js"
        />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background-color: aqua;
  min-height: 70vh;
`;

const StyleBtnView = styled.a`
  text-decoration: none;
`;
