import styled from "styled-components";
// import { Icon } from "../icon/Icon";

export const LanguageSwitch = () => {
  return (
    <StyledLang>
      <li>EN</li>
      <li>RU</li>
      {/* <Icon iconId="Up" /> */}
    </StyledLang>
  );
};

const StyledLang = styled.ul`
  list-style-type: none;
`;
