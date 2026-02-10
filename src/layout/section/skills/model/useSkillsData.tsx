import { useTranslation } from "react-i18next";

export const useSkillsData = () => {
  const { t } = useTranslation();
  const skillsData = [
    {
      category: t("sections.skills.category.languages"),
      list: ["TypeScript", "JavaScript"],
    },
    {
      category: t("sections.skills.category.databases"),
      list: ["PostgreSQL", "Monogo"],
    },
    {
      category: t("sections.skills.category.tools"),
      list: ["VSCode", "Figma", "Git", "Git Bash", "Material UI"],
    },
    {
      category: t("sections.skills.category.other"),
      list: ["HTML", "CSS", "SASS", "SCSS", "Styled components"],
    },
    {
      category: t("sections.skills.category.frameworks"),
      list: ["React"],
    },
  ];

  return { skillsData, t };
};
