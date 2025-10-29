import styled from "styled-components";
import { Button } from "../Button";
import { theme } from "../../styles/theme";

export const ContactForm = () => {
  return (
    <StyledContactForm>
      <StyledForm>
        <FieldDiv>
          <PlaceholderBox>
            <Field type="text" id="Name" placeholder="Name" />
            <Label htmlFor="Name">Name</Label>
          </PlaceholderBox>
          <PlaceholderBox>
            <Field type="email" id="Email" placeholder="Email" />
            <Label htmlFor="Email">Email</Label>
          </PlaceholderBox>
        </FieldDiv>
        <PlaceholderBox>
          <Field type="text" id="Title" placeholder="Title" />
          <Label htmlFor="Title">Title</Label>
        </PlaceholderBox>
        <PlaceholderBox>
          <Field as={"textarea"} id="Message" placeholder="Message" />
          <Label htmlFor="Message">Message</Label>
        </PlaceholderBox>
        <Button type="submit">Send</Button>
      </StyledForm>
    </StyledContactForm>
  );
};

const StyledContactForm = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  max-width: 569px;
  max-height: 342px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;

  button {
    max-width: 71px;
  }

  textarea {
    resize: none;
    height: 120px;
    padding: 8px;
  }
`;
const FieldDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
  gap: 16px;
`;
const PlaceholderBox = styled.div`
  width: 100%;

  position: relative;
`;
const Field = styled.input`
  width: 100%;
  min-height: 37px;
  border: 1px solid ${theme.colors.seconderyFont};
  padding-left: 8px;
  padding-right: 8px;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-1.1rem);
    color: ${theme.colors.font};
  }

  &::placeholder {
    opacity: 0;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    border-color: ${theme.colors.font};
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: ${theme.colors.seconderyFont};
  position: absolute;
  left: 8px;
  top: 8px;
  background-color: ${theme.colors.primaryBg};
  transition: 0.5s ease-in-out;
`;
