import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";

export const MobileMedia = () => {
  return (
    <StyledMobileMedia>
      <a href="">
        <Icon iconId="discord" height="32px" width="32px" viewBox="0 0 32 32" />
      </a>
      <a href="">
        <Icon iconId="github" height="32px" width="32px" viewBox="0 0 32 32" />
      </a>
      <a href="">
        <Icon iconId="email" height="32px" width="32px" viewBox="0 0 32 32" />
      </a>
    </StyledMobileMedia>
  );
};

const StyledMobileMedia = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  transform: scale(2);

  a,
  svg {
    background-color: transparent;
    transition: all 0.5s ease-in-out;
  }

  svg:hover {
    transform: scale(1.3);
    fill: ${theme.colors.font};
  }
`;
