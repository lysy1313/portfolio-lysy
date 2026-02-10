import React from "react";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { InfoAboutMe } from "./infoAboutMe/InfoAboutMe";
import { SkillAboutMe } from "./skillAboutMe/SkillAboutMe";
import { FunFacts } from "./fun-facts/FunFacts";
import { useTranslation } from "react-i18next";

export const AboutMePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle
        textTitlePage={t("global.titlePage.aboutMePage.textTitlePage")}
        titlePage={t("global.titlePage.aboutMePage.titlePage")}
      />
      <InfoAboutMe />
      <SkillAboutMe />
      <FunFacts />
    </>
  );
};
