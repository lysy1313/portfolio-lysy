import React from "react";
import styled from "styled-components";
import { SyncLoader } from "react-spinners";
import { theme } from "../../styles/theme";

export const Spinner: React.FC = () => {
  return (
    <StyledSpinner>
      <SyncLoader
        style={{ backgroundColor: "transparent" }}
        color={theme.colors.accent}
        loading={true}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </StyledSpinner>
  );
};

const StyledSpinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 99999999999999;
`;
