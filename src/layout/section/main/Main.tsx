import styled from "styled-components";
import cartImg from "../../../assets/images/Man.png";
import logoImg from "../../../assets/images/Logo-W.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";
import { Icon } from "../../../components/icon/Icon";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper
          justify="space-between"
          align="center"
          wrap="wrap"
          gap="0px"
        >
          <StyledDiv>
            <FlexWrapper justify="center" align="start" direction="column">
              <h1>
                Elias is a <StyledStrong>web designer</StyledStrong> and{" "}
                <StyledStrong>front-end</StyledStrong> developer
              </h1>
              <p>
                He crafts responsive websites where technologies meet creativity
              </p>
              <Button type="submit">Contact me!!!</Button>
            </FlexWrapper>
          </StyledDiv>

          <FlexWrapper
            justify="center"
            align="center"
            direction="column"
            gap="0"
          >
            <ImgPage>
              <ImgMan src={cartImg} alt="Man" />
              <ImgLogo src={logoImg} alt="Logo" />
              <DoteDiv>
                <Icon
                  iconId="dote"
                  height="84px"
                  width="84px"
                  viewBox="0 0 84 84"
                />
              </DoteDiv>
            </ImgPage>
            <ParDiv>
              <Square></Square>
              <p>
                Currently working on <strong>Portfolio</strong>
              </p>
            </ParDiv>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      flex-direction: column;
      justify-content: center;
      flex-wrap: nowrap;

      padding-top: 20px;
    }
  }
`;

const StyledDiv = styled.div`
  max-width: 537px;

  h1 {
    font-size: 32px;
  }

  p {
    line-height: 25px;
    margin: 30px 0 20px;
  }
`;

const StyledStrong = styled.strong`
  color: ${theme.colors.accent};
`;

const ImgPage = styled.div`
  position: relative;
  width: 469px;
  height: 386px;

  @media ${theme.media.mobile} {
    width: 316px;
    height: 260px;
    /* transform: scale(0.7); */
  }
`;

const ImgMan = styled.img`
  max-width: 457px;
  width: 100%;
  height: 386px;
  object-fit: cover;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;

  @media ${theme.media.mobile} {
    max-width: 307px;
    width: 100%;
    height: 260px;
  }
`;

const ImgLogo = styled.img`
  width: 155px;
  height: 155px;
  object-fit: cover;
  background-color: transparent;
  position: absolute;
  left: 0px;
  top: 84px;
  z-index: 0;

  @media ${theme.media.mobile} {
    width: 104px;
    height: 104px;
  }
`;

const ParDiv = styled.div`
  border: 1px solid ${theme.colors.seconderyFont};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  max-width: 402px;
  width: 100%;
  padding: 8px;

  p {
    /* display: inline; */
    text-align: start;
  }

  @media ${theme.media.mobile} {
    width: 320px;
    height: 58px;
    white-space: pre-wrap;
  }
`;

const Square = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  /* margin: 5px 10px 5px; */
  background-color: ${theme.colors.accent};
`;

const DoteDiv = styled.div`
  background-color: transparent;
  position: absolute;
  right: 16px;
  bottom: 56px;
  z-index: 2;
  svg {
    background-color: transparent;
  }

  @media ${theme.media.mobile} {
    width: 57px;
    height: 57px;
    transform: scale(0.7);
  }
`;
