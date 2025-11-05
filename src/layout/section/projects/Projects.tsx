import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import chertImg from "../../../assets/images/Chert.jpg";
import protectImg from "../../../assets/images/Protect.jpg";
import kahootImg from "../../../assets/images/Kahoot.jpg";
import { Container } from "../../../components/Container";
import { S } from "./Projects_Styles";
import React from "react";

export const Projects: React.FC = () => {
  return (
    <S.StyledProjects>
      <Container>
        <S.StyledProjectTitle>
          <SectionTitle textTitle="projects" hightLine="511px" />
          <S.StyleBtnView href="">View all ~~&gt;</S.StyleBtnView>
        </S.StyledProjectTitle>

        <FlexWrapper justify="space-around" align="start" wrap="wrap">
          <Project
            cartImg={chertImg}
            headline="ChertNodes"
            textParag="Minecraft servers hosting"
            textTopic="HTML SCSS Python Flask"
            linkDis="block"
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
        <S.SquareRight></S.SquareRight>
      </Container>
    </S.StyledProjects>
  );
};
