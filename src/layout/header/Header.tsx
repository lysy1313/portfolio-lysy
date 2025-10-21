import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Logo } from "../../components/logo/Logo";
import { LanguageSwitch } from "../../components/languageSwitch/LanguageSwitch";
import { FlexWrapper } from "../../components/FlexWrapper";

const items = ["home", "works", "about-me", "contact"];

export const Header = () => {
  return (
    <StyleHeader>
      <Logo />
      <FlexWrapper>
        <Menu menuItems={items} />
        <LanguageSwitch />
      </FlexWrapper>
    </StyleHeader>
  );
};

const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #bd1616;
`;
