import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyled = createGlobalStyle`
    
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    * {
        background-color: #282c33;
        margin: 0;
        padding: 0;
        color: #fff;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Fira Code", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color:${theme.colors.seconderyFont};
        /* line-height: 100% ; */
    }

    a{
        text-decoration: none;
    }
    a:hover{
        cursor: pointer;
    }

    ul{
        list-style: none;
    }

    button{
        /* background-color: unset;
        border: none; */
        font-family: "Fira Code",sans-serif;
        font-weight: 500;
        font-size: 16px;

    }
    button:hover{
        cursor: pointer;
    }

    h1{
        font-size: 32px;
    }

    p{
        font-weight: 400;
        font-style: normal;
        line-height: 26px;

        font-size: 16px;
        color: ${theme.colors.seconderyFont};
        /* line-height: 100%; */
    }

    svg{
        background-color: transparent;
    }

    section{
        padding: 50px 0;
    }
`;
