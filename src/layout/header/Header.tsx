import { Menu } from "./menu/Menu";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import React from "react";
import { S } from "./Header_Styles";
import { Media } from "./media/Media";

const items = [
  { nameItems: "home", hrefItem: "/" },
  { nameItems: "works", hrefItem: "/works" },
  { nameItems: "about-me", hrefItem: "/about-me" },
  { nameItems: "contacts", hrefItem: "/contacts" },
];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.StyleHeader>
      <Container>
        <Media />
        <FlexWrapper justify="space-between" align="center" wrap="wrap">
          {width < breakpoint ? (
            <>
              <Logo />
              <MobileMenu menuItems={items} />
            </>
          ) : (
            <>
              <Logo />
              <Menu menuItems={items} />
            </>
          )}
        </FlexWrapper>
      </Container>
    </S.StyleHeader>
  );
};
