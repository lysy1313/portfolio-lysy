import React from "react";
import { StyledLinkBtn } from "../../../../components/LinkBtn";
import { S } from "../Projects_Styles";

type ProjectPropsType = {
  cartImg?: string;
  textTopic?: string;
  headline?: string;
  textParag?: string;
  linkDis?: string;
  linkLive?: string;
  linkCached?: string;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  return (
    <S.StyledProject>
      <S.Img src={props.cartImg} />
      <S.ListTopic>{props.textTopic}</S.ListTopic>
      <div>
        <S.StyledH4>{props.headline}</S.StyledH4>
        <S.Parag>{props.textParag}</S.Parag>
        <div className="divBtn">
          <StyledLinkBtn href={props.linkLive} primary>
            Live &lt;~&gt;
          </StyledLinkBtn>
          <StyledLinkBtn
            href={props.linkCached}
            outlined
            linkDisplay={props.linkDis}
          >
            Cached &#x2265;
          </StyledLinkBtn>
        </div>
      </div>
    </S.StyledProject>
  );
};
