import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-family: 'Roboto Mono', monospace;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.colors.majorColor};
        transition: 0.2s;
    }
`