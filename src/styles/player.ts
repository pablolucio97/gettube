import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: ${({ theme }) => theme.sizes.huge} auto;
`

export const VideoContainer = styled.div`
display: flex;
`

export const IconsContainer = styled.div`
display: flex;
flex-direction: column;
width: 320px;
background-color: red;
`

export const DownloadsContainer = styled.div`
display: flex;
flex-direction: column;
width: 320px;
background-color: orange;
`
