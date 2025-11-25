import { useState } from "react";
import { Icon } from "../icon/Icon";
import { S } from "./LanguageSwitch_Styles";

const languages = ["EN", "RU"];

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
    <S.DropdownContainer>
      <S.DropdownToggle onClick={handleToggle}>
        {selectedLanguage}
        <Icon
          iconId={isOpen ? "pageUp" : "down"}
          width="10px"
          height="10px"
          viewBox="0 0 10 10"
        />
      </S.DropdownToggle>
      {isOpen && (
        <S.DropdownMenu>
          {languages.map((lang) => (
            <S.DropdownItem
              key={lang}
              onClick={() => handleSelectLanguage(lang)}
            >
              {lang}
            </S.DropdownItem>
          ))}
        </S.DropdownMenu>
      )}
    </S.DropdownContainer>
  );
};
