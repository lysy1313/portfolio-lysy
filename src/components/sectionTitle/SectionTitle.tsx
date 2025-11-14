import styled from "styled-components";
import { theme } from "../../styles/theme";
import React from "react";

type SectionTitlePropsType = {
  textTitle?: string;
  hightLine?: string;
};

export const SectionTitle: React.FC<SectionTitlePropsType> = (
  props: SectionTitlePropsType
) => {
  return (
    <StyledSectionTitle>
      <StyledH2>
        <span>#</span>
        {props.textTitle}
      </StyledH2>
    </StyledSectionTitle>
  );
};

const StyledSectionTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const StyledH2 = styled.h2<SectionTitlePropsType>`
  color: ${theme.colors.font};
  text-align: start;
  position: relative;
  font-size: 32px;

  &::after {
    content: "";
    display: block;
    width: ${(props) => (props.hightLine ? `${props.hightLine}` : "100%")};
    height: 1px;
    background: ${theme.colors.accent};

    position: absolute;
    right: -60%;
    top: 20px;
    transform: translateX(50%);

    @media ${theme.media.mobile} {
      display: none;
    }
  }
  span {
    color: ${theme.colors.accent};
  }
`;
