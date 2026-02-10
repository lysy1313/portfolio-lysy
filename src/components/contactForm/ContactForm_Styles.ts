import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

type ContactFormType = {
  contactMenuOpen: boolean | null;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
    
  }
`;

// Анимация исчезновения (Fade Out)
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
`;

const StyledContactForm = styled.div<ContactFormType>`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999999999;
  background-color: rgba(111, 112, 114, 0);
  padding: 0 15px;
  animation: ${(props) => (props.contactMenuOpen ? fadeIn : fadeOut)} 3s
    forwards;
`;

const StyledFormPage = styled.div`
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 350px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: 1px solid ${theme.colors.accent};
  box-shadow:
    0 20px 40px rgba(199, 120, 221, 0.2),
    0 5px 15px rgba(199, 120, 221, 0.1);

  padding: 20px 15px;

  position: relative;
`;

const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.seconderyFont};
  border-radius: 20%;
  margin-bottom: 10px;

  &:hover {
    border-color: ${theme.colors.accent};
    background-color: #abb2bf1d;
    span {
      background-color: ${theme.colors.font};
      &::before {
        background-color: ${theme.colors.font};
      }
    }
  }

  span {
    display: block;
    width: 20px;
    height: 1px;
    position: absolute;
    background-color: ${theme.colors.seconderyFont};
    transform: rotate(-45deg) translateY(0);

    &::before {
      content: "";
      right: 0;
      display: block;
      position: absolute;
      width: 20px;
      height: 1px;
      background-color: ${theme.colors.seconderyFont};
      transform: rotate(90deg);
    }
  }
`;

const StyledForm = styled.form`
  max-width: 569px;
  max-height: 342px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;

  button {
    max-width: 120px;
  }

  textarea {
    resize: none;
    height: 120px;
    padding: 8px;
  }
`;
const FieldDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
const PlaceholderBox = styled.div`
  position: relative;
`;
const Field = styled.input`
  width: 100%;
  min-height: 37px;
  border: 1px solid ${theme.colors.seconderyFont};
  padding-left: 8px;
  padding-right: 8px;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-1.1rem);
    color: ${theme.colors.font};
  }

  &::placeholder {
    opacity: 0;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    border-color: ${theme.colors.font};
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: ${theme.colors.seconderyFont};
  position: absolute;
  left: 8px;
  top: 8px;
  background-color: ${theme.colors.primaryBg};
  transition: 0.5s ease-in-out;
`;

export const S = {
  StyledContactForm,
  StyledFormPage,
  CloseBtn,
  StyledForm,
  FieldDiv,
  PlaceholderBox,
  Field,
  Label,
};
