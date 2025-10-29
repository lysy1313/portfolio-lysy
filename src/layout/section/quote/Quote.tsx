import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/theme";

export const Quote = () => {
  return (
    <StyledQuote>
      <Container>
        <FlexWrapper justify="center" align="center">
          <FlexWrapper
            justify="center"
            direction="column"
            align="flex-end"
            gap="0px"
          >
            <StyledFieldSet>
              <IconLeft>
                <Icon
                  iconId="quoteBlack"
                  height="30px"
                  width="40px"
                  viewBox="0 0 40 30"
                />
              </IconLeft>
              <TextQuote>
                With great power comes great electricity bill
              </TextQuote>
            </StyledFieldSet>
            <StyledFieldSet>
              <IconRight>
                <Icon
                  iconId="quoteBlack"
                  height="30px"
                  width="40px"
                  viewBox="0 0 40 30"
                />
              </IconRight>
              <NameTextQuote>- Dr. Who</NameTextQuote>
            </StyledFieldSet>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledQuote>
  );
};

const StyledQuote = styled.section`
  display: flex;
`;
const StyledFieldSet = styled.div`
  border: 1px solid ${theme.colors.seconderyFont};
  margin: 0;
  position: relative;
  padding: 32px;

  &:nth-child(1)::before {
    content: "";
    width: 91px;
    height: 91px;
    border: 1px solid ${theme.colors.seconderyFont};

    position: absolute;
    top: 15px;
    right: -350px;
  }
  &:nth-child(2) {
    border-top: none;
    margin: 0;
    padding: 16px;
  }
`;

const IconLeft = styled.span`
  position: absolute;
  top: -15px;
  left: 15px;
`;
const IconRight = styled.span`
  position: absolute;
  top: -15px;
  right: 15px;
  background-color: transparent;
`;

const TextQuote = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: ${theme.colors.font};
`;

const NameTextQuote = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  color: ${theme.colors.font};
`;
