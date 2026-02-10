import { useTranslation } from "react-i18next";

import chertImg from "../../../../assets/images/Chert.jpg";
import shopImg from "../../../../assets/images/Shop.png";
import kahootImg from "../../../../assets/images/Kahoot.jpg";
import botImg from "../../../../assets/images/bot.jpg";
import eliasImg from "../../../../assets/images/elis.jpg";

export const useProjectsData = () => {
  const { t } = useTranslation();

  const projectItems = [
    {
      cartImg: shopImg,
      headline: t("sections.projects.projectItems.shop.headline"),
      textParag: t("sections.projects.projectItems.shop.textParag"),
      textTopic: "React HTML SCSS Redux React-Router",
      linkCached:
        "https://github.com/lysy1313/product-catalog-with-shopping-cart",
      linkLive:
        "https://product-catalog-with-shopping-cart.vercel.app/#/product-catalog-with-shopping-cart/catalog",
    },
    {
      cartImg: eliasImg,
      headline: t("sections.projects.projectItems.portfolio.headline"),
      textParag: t("sections.projects.projectItems.portfolio.textParag"),
      textTopic: "React TS Styled-component i18next EmailJS",
      linkCached: "https://github.com/lysy1313/portfolio-lysy",
      linkLive: "/",
    },
    {
      cartImg: chertImg,
      headline: "ChertNodes(Fake)",
      textParag: "Minecraft servers hosting",
      textTopic: "HTML SCSS Python Flask",
      linkCached: "#",
      linkLive: "#",
    },

    {
      cartImg: kahootImg,
      headline: "Kahoot Answers Viewer(Fake)",
      textParag: "Get answers to your kahoot quiz",
      textTopic: "HTML SCSS Python Flask",
      linkCached: "#",
    },
    {
      cartImg: botImg,
      headline: "Kotik Bot(Fake)",
      textParag: "Multi-functional discord bot",
      textTopic: "HTML CSS JS",
      linkLive: "",
    },
  ];

  return { projectItems, t };
};
