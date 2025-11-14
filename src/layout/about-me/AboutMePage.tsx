import React from "react";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { InfoAboutMe } from "./infoAboutMe/InfoAboutMe";
import { SkillAboutMe } from "./skillAboutMe/SkillAboutMe";
import { FunFacts } from "./fun-facts/FunFacts";

export const AboutMePage: React.FC = () => {
  return (
    <>
      <PageTitle textTitlePage="Who am i?" titlePage="about-me" />
      <InfoAboutMe />
      <SkillAboutMe />
      <FunFacts />
    </>
  );
};
