import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import dotsWidthImg from "../../../assets/images/DotsWidth.svg";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle textTitle="contacts" hightLine="15%" />
        <FlexWrapper
          justify="space-between"
          align="space-around"
          wrap="wrap"
          gap="16px"
        >
          <FlexWrapper justify="flex-start" align="flex-start">
            <TextContacts>
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </TextContacts>
          </FlexWrapper>

          <MessagePage>
            <MessageText>Message me here</MessageText>
            <Message>
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
          </MessagePage>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const TextContacts = styled.p`
  width: 505px;
  text-align: start;
  margin-top: 20px;

  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  position: relative;

  &::before {
    content: url("${dotsWidthImg}");
    position: absolute;
    top: 0;
    left: -220px;
  }
`;

const MessagePage = styled.div`
  border: 0.5px solid ${theme.colors.seconderyFont};
  width: 200px;
  height: 140px;

  padding: 16px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Message = styled.ul`
  text-align: start;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MessageText = styled.p`
  color: ${theme.colors.font};
`;
const TextAdress = styled.li`
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${theme.colors.seconderyFont};
    transition: all 0.5s ease;
    svg {
      transition: all 0.5s ease;
    }
  }

  a:hover {
    color: ${theme.colors.font};
  }
  a:hover svg {
    fill: ${theme.colors.font};
  }
`;
