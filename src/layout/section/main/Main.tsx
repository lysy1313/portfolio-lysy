import styled from "styled-components";
import cartImg from "../../../assets/images/Man.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Button } from "../../../components/Button";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="center" align="center" wrap="wrap">
        <FlexWrapper justify="center" align="start" direction="column">
          <h1>Elias is a web designer and front-end developer</h1>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
          <Button text="Contact me!!" />
        </FlexWrapper>
        <FlexWrapper justify="start" align="center" direction="column">
          <img src={cartImg} alt="MAn" />
          <p>
            Currently working on <strong>Portfolio</strong>
          </p>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper justify="center" align="center">
        <FlexWrapper justify="center" direction="column" align="flex-end">
          <StyledFieldSet>
            <legend>
              <Icon iconId="quote" height="30px" width="35px" />
            </legend>
            <p>With great power comes great electricity bill</p>
          </StyledFieldSet>
          <StyledFieldSet>
            <legend className="legend-right">
              <Icon iconId="quoteBlack" height="30px" width="35px" />
            </legend>
            <p>- Dr. Who</p>
          </StyledFieldSet>
        </FlexWrapper>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #29f101;
`;

const StyledFieldSet = styled.fieldset`
  position: relative;
  padding: 10px;
  .legend-right {
    position: absolute;
    top: -10px;
    right: 5px;
    border-top: none;
  }
`;
