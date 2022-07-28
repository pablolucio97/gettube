import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.background_primary};
    & h1, h2, h3{
        color: ${(props) => props.theme.colors.title};
    }
    
    & p, span{
        
        color: ${(props) => props.theme.colors.text};
    }
`

export const Main = styled.main`
display: flex;
`

