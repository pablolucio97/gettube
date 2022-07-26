import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.default};
    }
    
    html{
        font-family: monospace;
        scroll-behavior: smooth;
        background: ${(props) => props.theme.colors.element_base};
    }

    body{
        overflow-x: hidden;
        width: 100%;
        height: 100vh;
    }

    button{
        display: flex;
        justify-content: center;
        text-align: center;
        border: none;
        cursor: pointer;
        padding: 4px;
    }

    li, ul{
        list-style: none;
    }
    
    a{
        text-decoration: none;
    }
`