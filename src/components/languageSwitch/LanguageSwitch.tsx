import styled from "styled-components";
// import { Icon } from "../icon/Icon";

export const LanguageSwitch = () => {
  return (
    <StyledLang>
      <option>EN</option>
      <option>RU</option>
      {/* <Icon iconId="Up" /> */}
    </StyledLang>
  );
};

const StyledLang = styled.select`
  appearance: none;
  background-color: #282c33;
  border: none;
  border-radius: 1px;
  color: #fff;
  font-size: 15px;
  padding: 5px;
  background-image: url("../../../assets/images/quoteBlack.svg");

  :focus {
    border-color: #282c33;
    background-color: #fff;
  }
  :focus-within {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    outline: none;
    background-color: #fff;
  }

  option:hover {
    background-color: #fff;
  }
`;
