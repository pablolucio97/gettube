import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: ${({ theme }) => theme.spacings.medium};
width: 240px;
@media(max-width: 1200px){
        width: 160px;
        margin: ${({ theme }) => theme.spacings.small};
}
@media(max-width: 768px){
        width: 32%;
        margin: ${({ theme }) => theme.spacings.tiny};
}
`
export const VideoPreviewContainer = styled.div`
display: flex;
width: 240px;
height: 160px;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.element_base};
margin-bottom: .8rem;
@media(max-width: 1200px){
        width: 100%;
        height: 96px;
    }
`