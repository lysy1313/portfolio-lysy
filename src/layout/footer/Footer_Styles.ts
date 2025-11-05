import styled from "styled-components";
import { theme } from "../../styles/theme";
import { FlexWrapper } from "../../components/FlexWrapper";

const StyledFooter = styled.footer`
  border-top: 1px solid ${theme.colors.seconderyFont};
  padding: 32px 0;

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      justify-content: center;
    }
  }
`;
const Copyright = styled.small`
  text-align: center;
  color: ${theme.colors.seconderyFont};

  font-weight: 400;
  font-size: 16px;
  margin-top: 50px;
`;

const FooterLogo = styled.div`
  width: 346px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
  }

  @media ${theme.media.mobile} {
    justify-content: center;
  }
`;

const FooterMedia = styled.div`
  width: 112px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;

  h4 {
    font-weight: 500;
    font-size: 24px;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    width: 100%;
  }

  li a {
    text-decoration: none;
    color: #abb2bf;
  }
  li a:hover {
    text-decoration: none;
    color: #fff;
  }
  li a svg {
    transition: 1s;
  }
  li a svg:hover {
    fill: ${theme.colors.font};
    transform: scale(1.2);
  }

  @media ${theme.media.mobile} {
    justify-content: center;
    align-items: center;
  }
`;

export const S = {
  StyledFooter,
  Copyright,
  FooterLogo,
  FooterMedia,
};
