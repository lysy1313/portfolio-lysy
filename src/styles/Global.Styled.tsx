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
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.font};
    }

    body {
        margin: 0;
        font-family: "Fira Code", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color:${theme.colors.seconderyFont};
        min-width: 360px; 
    }

    main{
        padding: 100px 0 10px;
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
        background-color: unset;
        border: none;
        font-family: "Fira Code",sans-serif;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 0;

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
        fill:${theme.colors.seconderyFont};
        
    }


    section{
        padding: 60px 0;
    }
    section:last-of-type{
        padding: 60px 0 140px;
    }
    
    select{
        font-family: "Fira Code",sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0%;
        color: ${theme.colors.seconderyFont};

    }
`;
