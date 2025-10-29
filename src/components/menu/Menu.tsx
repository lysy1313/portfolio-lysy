import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <li key={index}>
              <a href="">
                <span>#</span>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  /* li a::before {
    content: "#";
    color: #c778dd;
    font-weight: 400;
  } */

  li a {
    text-decoration: none;
    color: #abb2bf;
    transition: all 0.5s ease;
    span {
      color: #c778dd;
      font-weight: 400;
      transition: all 0.5s ease;
    }
  }
  li a:hover {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    span {
      color: #c778dd;
      font-weight: 500;
    }
  }
  /* li a:hover::before {
    content: "#";
    color: #c778dd;
    font-weight: 500;
  } */
`;
