import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;

    & h1, h2, h3{
        color: ${(props) => props.theme.colors.title};
    }
    
    & p, span{
        
        color: ${(props) => props.theme.colors.text};
    }

    background-color: ${(props) => props.theme.colors.background_primary};

`