import styled from "styled-components";
import { theme } from "../../styles/theme";
import React from "react";

type SectionTitlePropsType = {
  textTitle?: string;
  hightLine: string;
};

export const SectionTitle: React.FC<SectionTitlePropsType> = ({
  textTitle,
  hightLine,
}: SectionTitlePropsType) => {
  return (
    <StyledSectionTitle>
      <StyledH2>
        <span>#</span>
        {textTitle}
      </StyledH2>
      <Line $hightLine={hightLine} />
    </StyledSectionTitle>
  );
};

const StyledSectionTitle = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const StyledH2 = styled.h2`
  color: ${theme.colors.font};
  text-align: start;
  position: relative;
  font-size: 32px;

  span {
    color: ${theme.colors.accent};
  }
`;

const Line = styled.span<{ $hightLine: string }>`
  display: block;
  max-width: 511px;
  width: ${(props) => props.$hightLine || "100%"};
  height: 1px;
  background: ${theme.colors.accent};

  /* position: absolute;
  right: -60%;
  top: 20px;
  transform: translateX(50%); */

  @media ${theme.media.mobile} {
    display: none;
  }
`;
