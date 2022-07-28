import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: ${({ theme }) => theme.spacings.small};
width: 320px;
min-height: 100%;
background-color: ${({ theme }) => theme.colors.background_secondary};
@media (max-width: 1024px){
    width: 160px;
}
@media (max-width: 768px){
    display: none;
}
`