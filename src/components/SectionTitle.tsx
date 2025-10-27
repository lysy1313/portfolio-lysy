import styled from "styled-components";
import { theme } from "../styles/theme";

type SectionTitlePropsType = {
  textTitle?: string;
  hightLine?: string;
};

export const SectionTitle = (props: SectionTitlePropsType) => {
  // console.log(props)
  return (
    <StyledSectionTitle>
      <StyledH2>
        <span>#</span>
        {props.textTitle}
      </StyledH2>

      {/* <LineTitle></LineTitle> */}
    </StyledSectionTitle>
  );
};

const StyledSectionTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  /* margin-bottom: 30px; */
`;

const StyledH2 = styled.h2<SectionTitlePropsType>`
  color: ${theme.colors.font};
  text-align: start;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: ${(props) => props.hightLine || "100%"};
    height: 1px;
    background: ${theme.colors.accent};

    position: absolute;
    right: -60%;
    top: 20px;
    transform: translateX(50%);
  }
  span {
    color: ${theme.colors.accent};
  }
`;

// const LineTitle = styled.div<SectionTitlePropsType>`
//   width: ${(props) => props.hightLine || "30%"};
//   height: 1px;
//   background-color: ${theme.colors.accent};
// `;
