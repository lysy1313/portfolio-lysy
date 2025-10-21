import styled from "styled-components";
import { Button } from "../../../../components/Button";

type ProjectPropsType = {
  cartImg?: string;
  textTopic?: string;
  headline?: string;
  textParag?: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Img src={props.cartImg} />
      <Parag>{props.textTopic}</Parag>
      <div>
        <StyledH4>{props.headline}</StyledH4>
        <Parag>{props.textParag}</Parag>
        <div className="divBtn">
          <Button text="Live &lt;~&gt;"></Button>
          <Button text="Cached &ge;"></Button>
        </div>
      </div>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 330px;
  width: 100%;
  border: 0.5px solid #fff;
  margin: 5px;

  div {
    border-top: 0.5px solid #fff;
    padding: 10px;
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
  border-bottom: 0.5px solid #fff;
`;
const Parag = styled.p`
  /* border: 0.5px solid #fff; */
`;
const StyledH4 = styled.h4``;
