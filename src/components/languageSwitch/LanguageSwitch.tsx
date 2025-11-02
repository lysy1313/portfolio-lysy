import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";
// import { Icon } from "../icon/Icon";

const languages = ["EN", "RU", "UA"];

export const LanguageSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };
  return (
    <DropdownContainer>
      <DropdownToggle onClick={handleToggle}>
        {selectedLanguage}
        <Icon
          iconId={isOpen ? "pageUp" : "down"}
          width="10px"
          height="10px"
          viewBox="0 0 10 10"
        />
      </DropdownToggle>
      {isOpen && (
        <DropdownMenu>
          {languages.map((lang) => (
            <DropdownItem key={lang} onClick={() => handleSelectLanguage(lang)}>
              {lang}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownToggle = styled.button`
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.seconderyFont};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 36px;

  transition: 0.5s;

  &:hover {
    /* background-color: #808080; */
    color: ${theme.colors.font};
    svg {
      stroke: ${theme.colors.font};
    }
  }

  @media ${theme.media.mobile} {
    transform: scale(2);
    margin-left: 15px;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  right: 0;
  left: 0;
  top: 25px;
  background-color: transparent;
  box-shadow: 0 10px 15px rgba(158, 158, 158, 0.2);
  color: ${theme.colors.seconderyFont};
  padding: 8px;
  border: 1px solid ${theme.colors.seconderyFont};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1;
`;

const DropdownItem = styled.li`
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.seconderyFont};
  transition: 0.5s;

  &:hover {
    color: ${theme.colors.font};
  }

  @media ${theme.media.mobile} {
    transform: scale(1.5);
    margin: 0 auto;
  }
`;
