import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { Media } from "../../components/media/Media";
import { MobileMenu } from "../../components/mobileMenu/MobileMenu";

const items = ["home", "works", "about-me", "contact"];

export const Header = () => {
  return (
    <StyleHeader>
      <Container>
        <Media />
        <FlexWrapper justify="space-between" align="center" wrap="wrap">
          <Logo />
          <Menu menuItems={items} />
          <MobileMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyleHeader>
  );
};

const StyleHeader = styled.header`
  padding: 32px 0 8px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;
