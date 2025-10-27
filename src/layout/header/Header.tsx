import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Logo } from "../../components/logo/Logo";
import { LanguageSwitch } from "../../components/languageSwitch/LanguageSwitch";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { Media } from "../../components/media/Media";

const items = ["home", "works", "about-me", "contact"];

export const Header = () => {
  return (
    <StyleHeader>
      <Container>
        <Media />
        <FlexWrapper justify="space-between" align="center" wrap="wrap">
          <Logo />
          <FlexWrapper>
            <Menu menuItems={items} />
            <LanguageSwitch />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyleHeader>
  );
};

const StyleHeader = styled.header`
  padding-top: 32px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;

// const FixedDiv = styled.div`
//   padding-top: 32px;
//   position: fixed;
//   max-width: 1027px;
//   width: 100%;
//   top: 0;
//   z-index: 4;
// `;
