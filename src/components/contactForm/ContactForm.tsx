import React from "react";
import { Button } from "../Button";
import { S } from "./ContactForm_Styles";

type FormTypeProps = {
  closeForm: () => void;
};

export const ContactForm: React.FC<FormTypeProps> = (props: FormTypeProps) => {
  return (
    <S.StyledContactForm>
      <S.StyledFormPage>
        <S.CloseBtn onClick={props.closeForm}>
          <span></span>
        </S.CloseBtn>
        <S.StyledForm>
          <S.FieldDiv>
            <S.PlaceholderBox>
              <S.Field type="text" id="Name" placeholder="Name" />
              <S.Label htmlFor="Name">Name</S.Label>
            </S.PlaceholderBox>
            <S.PlaceholderBox>
              <S.Field type="email" id="Email" placeholder="Email" />
              <S.Label htmlFor="Email">Email</S.Label>
            </S.PlaceholderBox>
          </S.FieldDiv>

          <S.PlaceholderBox>
            <S.Field type="text" id="Title" placeholder="Title" />
            <S.Label htmlFor="Title">Title</S.Label>
          </S.PlaceholderBox>

          <S.PlaceholderBox>
            <S.Field as={"textarea"} id="Message" placeholder="Message" />
            <S.Label htmlFor="Message">Message</S.Label>
          </S.PlaceholderBox>

          <Button type="submit">Send</Button>
        </S.StyledForm>
      </S.StyledFormPage>
    </S.StyledContactForm>
  );
};
