import styled, { css } from "styled-components";
import { theme } from "../styles/theme";

type LinkBtnPropsType = {
  primary?: boolean;
  outlined?: boolean;
  // linkDisplayPrimary?: string;
  // linkDisplayOutlined?: string;
};

export const StyledLinkBtn = styled.a<LinkBtnPropsType>`
  padding: 8px 16px;

  ${(props) =>
    props.outlined &&
    css<LinkBtnPropsType>`
      border: 1px solid ${theme.colors.seconderyFont};
      color: ${theme.colors.seconderyFont};
      background-color: transparent;

      &:hover {
        background-color: rgba(171, 178, 191, 0.2);
      }
    `}

  ${(props) =>
    props.primary &&
    css<LinkBtnPropsType>`
      border: 1px solid ${theme.colors.accent};
      color: #fff;
      background-color: transparent;

      &:hover {
        background-color: rgba(199, 120, 221, 0.2);
      }
    `}
`;
