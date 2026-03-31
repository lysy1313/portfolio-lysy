import { useTranslation } from "react-i18next";

import tmdbImg from "../../../../assets/images/TMDB.png";
import shopImg from "../../../../assets/images/Shop.png";
import todoImg from "../../../../assets/images/TODO.png";
import eliasImg from "../../../../assets/images/elis.jpg";

export const useProjectsData = () => {
  const { t } = useTranslation();

  const projectItems = [
    {
      cartImg: tmdbImg,
      headline: t("sections.projects.projectItems.tmdb.headline"),
      textParag: t("sections.projects.projectItems.tmdb.textParag"),
      textTopic:
        "React TS HTML SCSS RTK RTK-Query React-Router Zod React-toastify",
      linkCached: "https://github.com/lysy1313/tmdb-kinopoisk-lysy",
      linkLive: "https://tmdb-kinopoisk-lysy.vercel.app/",
    },

    {
      cartImg: todoImg,
      headline: t("sections.projects.projectItems.todo.headline"),
      textParag: t("sections.projects.projectItems.todo.textParag"),
      textTopic: "React TS HTML MUI RTK-Query Zod React-Router React-Hook-Form",
      linkCached: "https://github.com/lysy1313/todolist",
      linkLive: "https://todolist-indol-ten-37.vercel.app/",
    },
    {
      cartImg: shopImg,
      headline: t("sections.projects.projectItems.shop.headline"),
      textParag: t("sections.projects.projectItems.shop.textParag"),
      textTopic: "React TS HTML SCSS Redux React-Router",
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
  ];

  return { projectItems, t };
};
