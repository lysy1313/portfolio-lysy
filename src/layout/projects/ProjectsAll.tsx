import React from "react";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { CompletedApps } from "./sectionProjectd/completedApps/CompletedApps";
import { SmallProjects } from "./smallProjects/SmallProjects";

const ProjectsAll: React.FC = () => {
  return (
    <>
      <PageTitle titlePage="projects" textTitlePage="List of my projects" />
      <CompletedApps />
      <SmallProjects />
    </>
  );
};

export default ProjectsAll;
