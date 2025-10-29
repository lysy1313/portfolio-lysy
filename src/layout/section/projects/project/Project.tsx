import styled from "styled-components";
// import { Button } from "../../../../components/Button";
import { theme } from "../../../../styles/theme";
import { StyledLinkBtn } from "../../../../components/LinkBtn";

type ProjectPropsType = {
  cartImg?: string;
  textTopic?: string;
  headline?: string;
  textParag?: string;
  linkDis?: string;
  linkLive?: string;
  linkCached?: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Img src={props.cartImg} />
      <ListTopic>{props.textTopic}</ListTopic>
      <div>
        <StyledH4>{props.headline}</StyledH4>
        <Parag>{props.textParag}</Parag>
        <div className="divBtn">
          {/* <Button text="Live &lt;~&gt;"></Button>
          <Button text="Cached &#x2265;"></Button> */}
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
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 330px;
  width: 100%;
  border: 0.5px solid ${theme.colors.seconderyFont};
  margin-top: 30px;

  div {
    border-top: 0.5px solid ${theme.colors.seconderyFont};
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }

  .divBtn {
    display: flex;
    flex-direction: row;
    border: none;
    padding: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 0.5px solid ${theme.colors.seconderyFont};
`;
const ListTopic = styled.p`
  text-align: start;
  padding: 8px;
  /* line-height: 100%; */
`;
const Parag = styled.p`
  letter-spacing: 0.1;
  line-height: 100%;
`;
const StyledH4 = styled.h4`
  font-weight: 500;
  font-size: 24px;
`;
