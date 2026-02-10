import React from "react";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { InfoContact } from "./infoContact/InfoContact";
import { AllMedia } from "./allMedia/AllMedia";
import { useTranslation } from "react-i18next";

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle
        titlePage={t("global.titlePage.contactPage.titlePage")}
        textTitlePage={t("global.titlePage.contactPage.textTitlePage")}
      />
      <InfoContact />
      <AllMedia />
    </>
  );
};
