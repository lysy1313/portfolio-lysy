import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";

import React from "react";
import { S } from "./AboutMe_Styles";
import { FragmentAboutMe } from "./fragmentAboutMe/FragmentAboutMe";
import { useTranslation } from "react-i18next";

export const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.StyledAboutMe>
      <Container>
        <SectionTitle
          textTitle={t("global.titleSection.aboutMe")}
          hightLine="30%"
        />
        <FragmentAboutMe displayTrue />
      </Container>
    </S.StyledAboutMe>
  );
};
