import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <FlexWrapper justify="center" align="center">
      <Link to={"/portfolio-lysy/"}>
        <StyledLinkLogo>
          <Icon iconId="logoWhite" height="16px" width="16px" />
          <h2>Lysy</h2>
        </StyledLinkLogo>
      </Link>
    </FlexWrapper>
  );
};

const StyledLinkLogo = styled.span`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  h2 {
    margin: 0;
    font-size: 16px;
  }
`;
