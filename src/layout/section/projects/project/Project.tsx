import React from "react";
import { StyledLinkBtn } from "../../../../components/LinkBtn";
import { S } from "../Projects_Styles";
import { useTranslation } from "react-i18next";

type ProjectPropsItemsType = {
  cartImg?: string;
  textTopic?: string;
  headline?: string;
  textParag?: string;
  linkLive?: string;
  linkCached?: string;
};

export const Project: React.FC<ProjectPropsItemsType> = (
  props: ProjectPropsItemsType,
) => {
  const { t } = useTranslation();
  return (
    <S.StyledProject>
      <S.Img src={props.cartImg} />
      <S.ListTopic>{props.textTopic}</S.ListTopic>
      <div>
        <S.StyledH4>{props.headline}</S.StyledH4>
        <S.Parag>{props.textParag}</S.Parag>
        <div className="divBtn">
          {props.linkLive !== null && (
            <StyledLinkBtn href={props.linkLive} $primary>
              {t("global.links.live")} &lt;~&gt;
            </StyledLinkBtn>
          )}

          {props.linkCached !== null && (
            <StyledLinkBtn href={props.linkCached} $outlined>
              {t("global.links.github")} &#x2265;
            </StyledLinkBtn>
          )}
        </div>
      </div>
    </S.StyledProject>
  );
};
