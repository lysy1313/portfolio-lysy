import React from "react";
import { Main } from "../section/main/Main";
import { Projects } from "../section/projects/Projects";
import { Skills } from "../section/skills/Skills";
import { AboutMe } from "../section/aboutme/AboutMe";
import { Contacts } from "../section/contacts/Contacts";

export const Home: React.FC = () => {
  return (
    <>
      <Main />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
    </>
  );
};
