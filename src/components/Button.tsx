import styled from "styled-components";

type ButtonPropsType = {
  text?: string;
};

export const Button = (props: ButtonPropsType) => {
  return <StyledBtn>{props.text}</StyledBtn>;
};

const StyledBtn = styled.button`
  border: 1px solid #c778dd;
  color: #fff;
  background-color: transparent;
  padding: 10px;

  &:hover {
    background-color: rgba(199, 120, 221, 0.2);
  }
`;
