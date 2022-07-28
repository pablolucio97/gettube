import styled from "styled-components";

export const Container = styled.div`
    width: 1080px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1{
        color: ${(props) => props.theme.colors.title};
        margin: 2rem auto 1rem;
    }
    
    & p, span{
        color: ${(props) => props.theme.colors.text};
    }

    background-color: ${(props) => props.theme.colors.background_secondary};
`

export const SearchContainer = styled.div`
    width: 848px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => props.theme.colors.background_primary};
    border-radius: 4px;
    margin: 0 auto 1rem;

    & button{
        color: ${(props) => props.theme.colors.text};
        height: 56px;
        font-size: ${({ theme }) => theme.sizes.large};
    }
`

export const VideosContainer = styled.div`
    max-width: 1080px;
    max-height: 800px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.theme.sizes.huge}; 
    margin: 0 auto;
    & h3{
    font-size: ${({ theme }) => theme.sizes.large};
    width: 100%;
    word-break: break-word;
   }
`

export const VideoContainer = styled.div`
display: flex;
flex-direction: column;
& h1{
    margin-top: ${({ theme }) => theme.sizes.xxsmall};
    font-size: ${({ theme }) => theme.sizes.small};
}
& h3{
    margin-bottom: ${({ theme }) => theme.sizes.xxsmall};
}
& p:last-child{
    margin-top:  0;
}
margin: 0 auto;
`