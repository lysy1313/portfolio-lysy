import React from "react";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import styled from "styled-components";
import { Project } from "../../section/projects/project/Project";
import { S } from "../../section/projects/Projects_Styles";
import { theme } from "../../../styles/theme";

const smallProjectItems = [
  {
    headline: "Bot boilerplate",
    textParag:
      "Start creating scalable discord.js bot with typescript in seconds",
    textTopic: "Discord.js TS JS",
    linkLive: "#",
  },
  {
    headline: "My blog",
    textParag: "Front-end of my future blog website written in vue",
    textTopic: "VUE CSS JS",
    linkLive: "#",
  },
  {
    headline: "Chess pro",
    textParag: "Figma landing page about service for viewing chess tournaments",
    textTopic: "Figma",
    linkLive: "#",
  },
  {
    headline: "Crash protect website",
    textParag:
      "Figma template for website about anti-raid, anti-crash discord bot",
    textTopic: "Figma",
    linkLive: "",
  },
  {
    headline: "CSS expirements",
    textParag: "Collection of my different little projects in css",
    textTopic: "HTML CSS",
    linkLive: "",
  },
  {
    headline: "Web Dev nvim config",
    textParag: "Config for neovim perfect for web developer",
    textTopic: "Lua NeoVim",
    linkLive: "",
  },
  {
    headline: "Ooku",
    textParag: "Simple link shortener with auth",
    textTopic: "Python Quart HTML",
    linkLive: "",
  },
  {
    headline: "School website",
    textParag: "Figma template website for my school",
    textTopic: "Figma",
    linkLive: "",
  },
];

export const SmallProjects: React.FC = () => {
  return (
    <StyledSmallProjects>
      <Container>
        <SectionTitle textTitle="small-projects" hightLine="0" />
        <GridSmallProjects>
          {smallProjectItems.map((smProj, index: number) => {
            return (
              <SallPoject>
                <Project
                  key={index}
                  textTopic={smProj.textTopic}
                  headline={smProj.headline}
                  textParag={smProj.textParag}
                  linkLive={smProj.linkLive}
                />
              </SallPoject>
            );
          })}
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
const SallPoject = styled.div``;
