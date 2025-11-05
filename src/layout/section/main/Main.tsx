import cartImg from "../../../assets/images/Man.png";
import logoImg from "../../../assets/images/Logo-W.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Icon } from "../../../components/icon/Icon";
import { useEffect, useState } from "react";
import { ContactForm } from "../../../components/contactForm/ContactForm";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  const [contactMenuOpen, setContactMenuOpen] = useState(false);

  const handleToggle = () => {
    setContactMenuOpen(!contactMenuOpen);
  };

  useEffect(() => {
    if (contactMenuOpen) {
      document.body.classList.add("no-scroll"); // Добавляем класс при открытии
    } else {
      document.body.classList.remove("no-scroll"); // Удаляем при закрытии
    }
  }, [contactMenuOpen]);

  return (
    <S.StyledMain>
      <Container>
        {contactMenuOpen === true ? (
          <ContactForm closeForm={handleToggle} />
        ) : null}
        <FlexWrapper
          justify="space-between"
          align="center"
          wrap="wrap"
          gap="0px"
        >
          <S.StyledDiv>
            <FlexWrapper
              justify="center"
              align="start"
              direction="column"
              gap="0px"
            >
              <h1>
                Elias is a <S.StyledStrong>web designer</S.StyledStrong> and{" "}
                <S.StyledStrong>front-end</S.StyledStrong> developer
              </h1>
              <p>
                He crafts responsive websites where technologies meet creativity
              </p>
              <Button onClick={handleToggle}>Contact me!!!</Button>
            </FlexWrapper>
          </S.StyledDiv>

          <FlexWrapper
            justify="center"
            align="center"
            direction="column"
            gap="0"
          >
            <S.ImgPage>
              <S.ImgMan src={cartImg} alt="Man" />
              <S.ImgLogo src={logoImg} alt="Logo" />
              <S.DoteDiv>
                <Icon
                  iconId="dote"
                  height="84px"
                  width="84px"
                  viewBox="0 0 84 84"
                />
              </S.DoteDiv>
            </S.ImgPage>
            <S.ParDiv>
              <S.Square></S.Square>
              <p>
                Currently working on <strong>Portfolio</strong>
              </p>
            </S.ParDiv>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper justify="center" align="center">
          <FlexWrapper
            justify="center"
            direction="column"
            align="flex-end"
            gap="0px"
          >
            <S.StyledFieldSet>
              <S.IconLeft>
                <Icon
                  iconId="quoteBlack"
                  height="30px"
                  width="40px"
                  viewBox="0 0 40 30"
                />
              </S.IconLeft>
              <S.TextQuote>
                With great power comes great electricity bill
              </S.TextQuote>
            </S.StyledFieldSet>
            <S.StyledFieldSet>
              <S.IconRight>
                <Icon
                  iconId="quoteBlack"
                  height="30px"
                  width="40px"
                  viewBox="0 0 40 30"
                />
              </S.IconRight>
              <S.NameTextQuote>- Dr. Who</S.NameTextQuote>
            </S.StyledFieldSet>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.StyledMain>
  );
};
