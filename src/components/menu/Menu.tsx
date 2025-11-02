import styled from "styled-components";
import { theme } from "../../styles/theme";
import { LanguageSwitch } from "../languageSwitch/LanguageSwitch";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <StyledListMenu>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <li key={index}>
              <a href="">
                <span>#</span>
                {item}
              </a>
            </li>
          );
        })}
        <li>
          <LanguageSwitch />
        </li>
      </StyledListMenu>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const StyledListMenu = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;

  li a {
    text-decoration: none;
    color: #abb2bf;
    transition: all 0.5s ease;
    span {
      color: #c778dd;
      font-weight: 400;
      transition: all 0.5s ease;
    }
  }
  li a:hover {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    span {
      color: #c778dd;
      font-weight: 500;
    }
  }
`;
