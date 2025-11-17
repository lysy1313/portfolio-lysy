import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll } from "react-scroll";
import { theme } from "../../styles/theme";

export const GoTopBtn = () => {
  const [shownBtn, setShownBtn] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShownBtn(true);
      } else {
        setShownBtn(false);
      }
    });
  }, []);

  return shownBtn ? (
    <StyledGoTopBtn onClick={() => animateScroll.scrollToTop()}>
      <Icon iconId="pageUp" height="30" width="30" viewBox="0 0 10 10" />
    </StyledGoTopBtn>
  ) : (
    false
  );
};

const StyledGoTopBtn = styled.button`
  background-color: rgba(40, 44, 51, 0.3);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 9999999999;
  svg {
    stroke: ${theme.colors.seconderyFont};
    &:hover {
      stroke: ${theme.colors.font};
    }
  }
`;
