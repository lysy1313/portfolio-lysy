import styled from "styled-components";
import { theme } from "../styles/theme";

export const Container = styled.div`
  max-width: 1030px;
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0 auto;
  /* outline: 1px solid red; */
  position: relative;

  @media ${theme.media.desktopMax} {
    padding: 0 15px;
  }
`;
