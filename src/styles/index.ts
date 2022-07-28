import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    & h1, h2, h3{
        color: ${(props) => props.theme.colors.title};
    }
    
    & p, span{
        
        color: ${(props) => props.theme.colors.text};
    }

    background-color: ${(props) => props.theme.colors.background_primary};
`

export const VideosContainer = styled.main`
    max-width: 1440px;
    min-height: 100vh;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 140px;
    padding: ${(props) => props.theme.sizes.huge} 0; 
    @media(max-width: 1200px){
        margin-right: 80px;
    }
    @media(max-width: 1024px){
        margin-right: 28px;
    }
    @media(max-width: 768px){
        width: 100%;
        margin: 0 auto;
    }

`