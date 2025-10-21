import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

export const Logo = () => {
  return (
    <FlexWrapper justify="center" align="center">
      <StyledLinkLogo href="">
        <Icon iconId="logoWhite" height="16px" width="16px" />
        <h2>Lysy</h2>
      </StyledLinkLogo>
    </FlexWrapper>
  );
};

const StyledLinkLogo = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  h2 {
    margin: 0;
    font-size: 1rem;
  }
`;
