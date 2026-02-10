import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "../icon/Icon";
import { S } from "./LanguageSwitch_Styles";

// Доступные языки
const languages = [
  { code: "en", name: "EN" },
  { code: "ru", name: "RU" },
];

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = i18n.language || "en";

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode); // Меняем язык через i18n
    localStorage.setItem("language", langCode);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer>
      <S.DropdownToggle onClick={handleToggle}>
        {currentLanguage.toUpperCase()}
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
              key={lang.code}
              onClick={() => handleSelectLanguage(lang.code)}
            >
              {lang.name}
            </S.DropdownItem>
          ))}
        </S.DropdownMenu>
      )}
    </S.DropdownContainer>
  );
};
