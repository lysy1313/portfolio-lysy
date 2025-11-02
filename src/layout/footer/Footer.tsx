import styled from "styled-components";
import { Container } from "../../components/Container";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { theme } from "../../styles/theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="space-between" direction="column">
          <FlexWrapper justify="space-between" align="center" wrap="wrap">
            <FooterLogo>
              <Logo />
              <p>elias@elias-dev.ml</p>
              <h3>Web designer and front-end developer</h3>
            </FooterLogo>
            <FooterMedia>
              <h4>Media</h4>
              <ul>
                <li>
                  <a>
                    <Icon
                      height="32px"
                      width="32px"
                      viewBox="0 0 32 32"
                      iconId="github"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <Icon
                      height="32px"
                      width="32px"
                      viewBox="0 0 32 32"
                      iconId="telegram"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <Icon
                      height="32px"
                      width="32px"
                      viewBox="0 0 32 32"
                      iconId="discord"
                    />
                  </a>
                </li>
              </ul>
            </FooterMedia>
          </FlexWrapper>
          <Copyright>© Copyright 2025. Made by Lysy</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

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
