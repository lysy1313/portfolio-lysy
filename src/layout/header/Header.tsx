import { Menu } from "./menu/Menu";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import React from "react";
import { S } from "./Header_Styles";
import { Media } from "./media/Media";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  const items = [
    {
      nameItems: t("pages.header.navigation.home"),
      hrefItem: "/portfolio-lysy/",
    },
    {
      nameItems: t("pages.header.navigation.works"),
      hrefItem: "/portfolio-lysy/works",
    },
    {
      nameItems: t("pages.header.navigation.about-me"),
      hrefItem: "/portfolio-lysy/about-me",
    },
    {
      nameItems: t("pages.header.navigation.contacts"),
      hrefItem: "/portfolio-lysy/contacts",
    },
  ];

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.StyleHeader>
      <Container>
        <Media />
        <FlexWrapper justify="space-between" align="center" wrap="wrap">
          <Logo />
          {width < breakpoint ? (
            <MobileMenu menuItems={items} />
          ) : (
            <Menu menuItems={items} />
          )}
        </FlexWrapper>
      </Container>
    </S.StyleHeader>
  );
};
