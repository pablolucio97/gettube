import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_primary};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
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

