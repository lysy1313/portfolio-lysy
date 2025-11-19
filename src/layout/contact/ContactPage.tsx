import React from "react";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { InfoContact } from "./infoContact/InfoContact";
import { AllMedia } from "./allMedia/AllMedia";

export const ContactPage: React.FC = () => {
  return (
    <>
      <PageTitle titlePage="contacts" textTitlePage="Who am i?" />
      <InfoContact />
      <AllMedia />
    </>
  );
};
