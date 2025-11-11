import styled from "styled-components";
import { theme } from "../../styles/theme";

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
  svg {
    stroke: ${theme.colors.seconderyFont};
  }

  &:hover {
    color: ${theme.colors.font};
    svg {
      stroke: ${theme.colors.font};
    }
  }

  @media ${theme.media.tablet} {
    transform: scale(2);
    margin-left: 15px;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  right: 0;
  left: 0;
  top: 25px;

  background-color: ${theme.colors.primaryBg};
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

export const S = {
  DropdownContainer,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
};
