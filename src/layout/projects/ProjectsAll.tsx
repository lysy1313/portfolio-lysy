import React from "react";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { CompletedApps } from "./sectionProjectd/completedApps/CompletedApps";
import { SmallProjects } from "./smallProjects/SmallProjects";
import { useTranslation } from "react-i18next";

const ProjectsAll: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle
        titlePage={t("global.titlePage.contactPage.titlePage")}
        textTitlePage={t("global.titlePage.contactPage.textTitlePage")}
      />
      <CompletedApps />
      <SmallProjects />
    </>
  );
};

export default ProjectsAll;
