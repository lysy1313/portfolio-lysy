import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import chertImg from "../../../assets/images/Chert.jpg";
import protectImg from "../../../assets/images/Protect.jpg";
import kahootImg from "../../../assets/images/Kahoot.jpg";
import botImg from "../../../assets/images/bot.jpg";
import eliasImg from "../../../assets/images/elis.jpg";
import { Container } from "../../../components/Container";
import { S } from "./Projects_Styles";
import React from "react";
import { Link } from "react-router-dom";

export const projectItems = [
  {
    cartImg: chertImg,
    headline: "ChertNodes",
    textParag: "Minecraft servers hosting",
    textTopic: "HTML SCSS Python Flask",
    linkCached: "#",
    linkLive: "#",
  },
  {
    cartImg: protectImg,
    headline: "ProtectX",
    textParag: "Discord anti-crash bot",
    textTopic: "React Express Discrod.js Node.js HTML SCSS Python Flask",
    linkCached: "#",
  },
  {
    cartImg: kahootImg,
    headline: "Kahoot Answers Viewer",
    textParag: "Get answers to your kahoot quiz",
    textTopic: "HTML SCSS Python Flask",
    linkCached: "#",
  },
  {
    cartImg: botImg,
    headline: "Kotik Bot",
    textParag: "Multi-functional discord bot",
    textTopic: "HTML CSS JS",
    linkLive: "",
  },
  {
    cartImg: eliasImg,
    headline: "Portfolio",
    textParag: "You’re using it run",
    textTopic: "Vue TS Less",
    linkLive: "",
  },
];

export const Projects: React.FC = () => {
  return (
    <S.StyledProjects>
      <Container>
        <S.StyledProjectTitle>
          <SectionTitle textTitle="projects" hightLine="100%" />
          <Link to={"/works"}>
            <S.StyleBtnView>View all ~~&gt;</S.StyleBtnView>
          </Link>
        </S.StyledProjectTitle>

        <FlexWrapper justify="space-around" align="start" wrap="wrap">
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
        </FlexWrapper>
        <S.SquareRight></S.SquareRight>
      </Container>
    </S.StyledProjects>
  );
};
