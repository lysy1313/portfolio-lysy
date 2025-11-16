import React, { ElementRef, useRef, useState } from "react";
import { Button } from "../Button";
import { S } from "./ContactForm_Styles";
import emailjs from "@emailjs/browser";
import { ModalWarning } from "../modalWarning/ModalWarning";
// import { motion } from "motion/react";

type FormTypeProps = {
  closeForm: () => void;
  contactMenuOpen: boolean | null;
};

export const ContactForm: React.FC<FormTypeProps> = (props: FormTypeProps) => {
  const form = useRef<ElementRef<"form">>(null);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [titleMessage, setTitleMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isColor, setIsColor] = useState<string | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setWarningMessage(null);
    setIsColor(null);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_1vlrsbi", "template_udsi22r", form.current, {
        publicKey: "gVP_hMOVbsZwFms1D",
      })
      .then(
        () => {
          setTitleMessage("SUCSSES!");
          setWarningMessage("Your message has been sent!");
          setIsModalOpen(true);
          setIsColor("green");
        },
        (error) => {
          setTitleMessage("FAILD!");
          setWarningMessage(`Your message was not sent! ${error.text}`);
          setIsModalOpen(true);
          setIsColor("red");
        }
      );
    e.target.reset();
  };

  return (
    <S.StyledContactForm contactMenuOpen={props.contactMenuOpen} id="contact">
      <S.StyledFormPage>
        {isModalOpen && warningMessage && (
          <ModalWarning
            titleMessage={titleMessage}
            warningMessage={warningMessage}
            onClose={closeModal}
            color={isColor}
          />
        )}
        <S.CloseBtn onClick={props.closeForm}>
          <span></span>
        </S.CloseBtn>
        <S.StyledForm ref={form} onSubmit={sendEmail}>
          <S.FieldDiv>
            <S.PlaceholderBox>
              <S.Field
                required
                type="text"
                id="Name"
                placeholder="Name"
                name="user_name"
              />
              <S.Label htmlFor="Name">Name</S.Label>
            </S.PlaceholderBox>
            <S.PlaceholderBox>
              <S.Field
                required
                type="email"
                id="Email"
                placeholder="Email"
                name="email"
              />
              <S.Label htmlFor="Email">Email</S.Label>
            </S.PlaceholderBox>
          </S.FieldDiv>

          <S.PlaceholderBox>
            <S.Field
              required
              type="text"
              id="Title"
              placeholder="Title"
              name="title"
            />
            <S.Label htmlFor="Title">Title</S.Label>
          </S.PlaceholderBox>

          <S.PlaceholderBox>
            <S.Field
              required
              as={"textarea"}
              id="Message"
              placeholder="Message"
              name="message"
            />
            <S.Label htmlFor="Message">Message</S.Label>
          </S.PlaceholderBox>

          <Button type="submit">Send</Button>
        </S.StyledForm>
      </S.StyledFormPage>
    </S.StyledContactForm>
  );
};
