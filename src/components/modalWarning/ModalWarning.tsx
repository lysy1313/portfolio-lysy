import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

type ModalWarningTypeProps = {
  titleMessage?: string | null;
  warningMessage?: string | null;
  color?: string | null;
  onClose?: () => void;
};

export const ModalWarning: React.FC<ModalWarningTypeProps> = (
  props: ModalWarningTypeProps
) => {
  return (
    <StyledModalWarning color={props.color} onClick={() => props.onClose?.()}>
      <StyledModalWarningTitle color={props.color}>
        {props.titleMessage}
      </StyledModalWarningTitle>
      <StyledModalWarningText color={props.color}>
        {props.warningMessage}
      </StyledModalWarningText>
      <span>Click on the window to close.</span>
    </StyledModalWarning>
  );
};

const StyledModalWarning = styled.div<ModalWarningTypeProps>`
  width: 300px;
  height: 200px;
  background-color: ${theme.colors.primaryBg};
  border: 1px solid ${(props) => props.color || "green"};
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999999999999999999;

  box-shadow: ${(props) =>
      props.color === "green"
        ? `0 20px 40px rgba(120, 221, 142, 0.2),
    0 5px 15px rgba(120, 221, 142, 0.1);`
        : `0 20px 40px rgba(221, 120, 120, 0.2),
    0 5px 15px rgba(221, 120, 120, 0.1);`}
    span {
    color: ${theme.colors.seconderyFont};
    font-size: 10px;
  }
`;
const StyledModalWarningTitle = styled.h4<ModalWarningTypeProps>`
  text-align: center;
  color: ${(props) => props.color};
  margin-bottom: 20px;
`;
const StyledModalWarningText = styled.p<ModalWarningTypeProps>`
  text-align: center;
  color: ${(props) => props.color};
`;
