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

          <FlexWrapper justify="center" align="center" direction="column">
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

              <ParDiv>
                <Square></Square>
                <p>
                  Currently working on <strong>Portfolio</strong>
                </p>
              </ParDiv>
            </ImgPage>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
`;

const StyledDiv = styled.div`
  width: 537px;

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
`;

const ImgMan = styled.img`
  width: 457px;
  height: 386px;
  object-fit: cover;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
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
`;

const ParDiv = styled.div`
  border: 1px solid ${theme.colors.seconderyFont};
  display: inline;
  position: absolute;
  z-index: 2;
  right: 35px;
  bottom: -20px;
  display: flex;
  align-items: center;
  width: 402px;
`;

const Square = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 5px;
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
`;
