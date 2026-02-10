import React, { ElementRef, FormEvent, useRef, useState } from "react";
import { Button } from "../Button";
import { S } from "./ContactForm_Styles";
import emailjs from "@emailjs/browser";
import { ModalWarning } from "../modalWarning/ModalWarning";
import { Spinner } from "../spinner/Spinner";
import { useTranslation } from "react-i18next";
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
  const [spinner, setSpinner] = useState(false);
  const { t } = useTranslation();

  const closeModal = () => {
    setIsModalOpen(false);
    setWarningMessage(null);
    setIsColor(null);
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setSpinner(true);
    emailjs
      .sendForm("service_1vlrsbi", "template_udsi22r", form.current, {
        publicKey: "gVP_hMOVbsZwFms1D",
      })
      .then(
        () => {
          setSpinner(false);
          setIsModalOpen(true);
          setTitleMessage(t("components.modalWarning.titleMessage.success"));
          setWarningMessage(
            t("components.modalWarning.warningMessage.success"),
          );
          setIsColor("green");
        },
        (error) => {
          setSpinner(false);
          setIsModalOpen(true);
          setTitleMessage(t("components.modalWarning.titleMessage.failed"));
          setWarningMessage(
            `${t("components.modalWarning.warningMessage.failed")} ${error.text}`,
          );
          setIsColor("red");
        },
      );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <S.StyledContactForm contactMenuOpen={props.contactMenuOpen} id="contact">
      <S.StyledFormPage>
        {spinner && <Spinner />}
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
              <S.Label htmlFor="Name">
                {t("components.contactForm.form.name")}
              </S.Label>
            </S.PlaceholderBox>
            <S.PlaceholderBox>
              <S.Field
                required
                type="email"
                id="Email"
                placeholder="Email"
                name="email"
              />
              <S.Label htmlFor="Email">
                {t("components.contactForm.form.email")}
              </S.Label>
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
            <S.Label htmlFor="Title">
              {t("components.contactForm.form.title")}
            </S.Label>
          </S.PlaceholderBox>

          <S.PlaceholderBox>
            <S.Field
              required
              as={"textarea"}
              id="Message"
              placeholder="Message"
              name="message"
            />
            <S.Label htmlFor="Message">
              {t("components.contactForm.form.message")}
            </S.Label>
          </S.PlaceholderBox>

          <Button type="submit">{t("global.buttons.send")}</Button>
        </S.StyledForm>
      </S.StyledFormPage>
    </S.StyledContactForm>
  );
};
