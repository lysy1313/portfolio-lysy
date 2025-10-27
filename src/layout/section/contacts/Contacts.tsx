import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle textTitle="contacts" hightLine="15%" />
        <FlexWrapper
          justify="space-between"
          align="space-around"
          wrap="wrap"
          gap="10px"
        >
          <FlexWrapper justify="flex-start" align="flex-start">
            <TextContacts>
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </TextContacts>
          </FlexWrapper>

          <Message>
            Message me here
            <TextAdress>
              <a href="">
                <Icon
                  iconId="discord"
                  height="32px"
                  width="32px"
                  viewBox="0 0 32 32"
                />
                !Elias#3519
              </a>
            </TextAdress>
            <TextAdress>
              <a href="">
                <Icon
                  iconId="email"
                  height="32px"
                  width="32px"
                  viewBox="0 0 32 32"
                />
                elias@elias.me
              </a>
            </TextAdress>
          </Message>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  max-height: 100vh;
`;

const TextContacts = styled.p`
  width: 505px;
  text-align: start;

  font-weight: 400;
  font-size: 16px;
  /* line-height: 26px; */
`;
const Message = styled.ul`
  border: 0.5px solid ${theme.colors.seconderyFont};
  width: 200px;
  height: 140px;
  text-align: start;
  font-size: 16px;
  padding: 16px;
`;
const TextAdress = styled.li`
  \ a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    color: ${theme.colors.seconderyFont};
  }
`;
