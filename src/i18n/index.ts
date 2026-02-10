import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as enTranslations from "./locales/en/index.ts";
import * as ruTranslations from "./locales/ru/index.ts";

const enResources = {
  global: enTranslations.global,
  components: {
    contactForm: enTranslations.contactForm,
    modalWarning: enTranslations.modalWarning,
  },
  pages: {
    aboutMe: enTranslations.aboutMe,
    contact: enTranslations.contact,
    footer: enTranslations.footer,
    fragmentAboutMe: enTranslations.fragmentAboutMe,
    header: enTranslations.header,
  },
  sections: {
    main: enTranslations.main,
    projects: enTranslations.projectsSections,
    skills: enTranslations.skills,
  },
};

const ruResources = {
  global: ruTranslations.global,
  components: {
    contactForm: ruTranslations.contactForm,
    modalWarning: ruTranslations.modalWarning,
  },
  pages: {
    aboutMe: ruTranslations.aboutMe,
    contact: ruTranslations.contact,
    footer: ruTranslations.footer,
    fragmentAboutMe: ruTranslations.fragmentAboutMe,
    header: ruTranslations.header,
  },
  sections: {
    main: ruTranslations.main,
    projects: ruTranslations.projectsSections,
    skills: ruTranslations.skills,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enResources },
      ru: { translation: ruResources },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
