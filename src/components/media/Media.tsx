import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";

export const Media = () => {
  return (
    <StyledMedia>
      <Line></Line>
      <a href="">
        <Icon
          iconId="discord"
          height="32px"
          width="32px"
          viewBox="0 0 32 32"
        />
      </a>
      <a href="">
        <Icon
          iconId="github"
          height="32px"
          width="32px"
          viewBox="0 0 32 32"
        />
      </a>
      <a href="">
        <Icon
          iconId="email"
          height="32px"
          width="32px"
          viewBox="0 0 32 32"
        />
      </a>
    </StyledMedia>
  );
};

const StyledMedia = styled.div`
  position: absolute;
  left: -122px;
  top: -32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  svg:hover {
    transform: scale(1.5);
  }
`;

const Line = styled.span`
  height: 191px;
  width: 1px;
  background-color: ${theme.colors.seconderyFont};
`;
