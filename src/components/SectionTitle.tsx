import styled from "styled-components";

type SectionTitlePropsType = {
  textTitle?: string;
};

export const SectionTitle = (props: SectionTitlePropsType) => {
  return (
    <StyledSectionTitle>
      <span>#</span>
      {props.textTitle}
    </StyledSectionTitle>
  );
};

export const StyledSectionTitle = styled.h2`
  color: #fff;
  text-align: center;
  span {
    color: #c778dd;
  }
`;
