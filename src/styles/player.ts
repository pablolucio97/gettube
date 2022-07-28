import styled from 'styled-components'
import { BsHeart, BsShare, BsClock } from 'react-icons/bs'

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin: -${({ theme }) => theme.sizes.huge} auto 0;
min-height: 100vh;
`

export const VideoContainer = styled.div`
display: flex;
flex-direction: column;
& h1{
    margin-top: ${({ theme }) => theme.sizes.xxsmall};
}
& h3{
    margin-bottom: ${({ theme }) => theme.sizes.xxsmall};
}
& p:last-child{
    margin-top:  0;
}
margin: 0 auto;
`

export const IconsContainer = styled.div`
display: flex;
width: 320px;
margin: ${({ theme }) => theme.sizes.small} 0;
`

export const DownloadsContainer = styled.div`
display: flex;
flex-direction: column;
width: 320px;

& button{
margin-top: ${({ theme }) => theme.sizes.xsmall};
color: ${(props) => props.theme.colors.white100};
}
`

export const BsHeartIcon = styled(BsHeart)`
margin-top: ${({ theme }) => theme.sizes.xsmall};
margin-right: ${({ theme }) => theme.sizes.small};
width: 20px;
height: 20px;
cursor: pointer;
`
export const BsClockIcon = styled(BsClock)`
margin-top: ${({ theme }) => theme.sizes.xsmall};
margin-right: ${({ theme }) => theme.sizes.small};
width: 20px;
height: 20px;
cursor: pointer;
`
export const BsShareIcon = styled(BsShare)`
margin-top: ${({ theme }) => theme.sizes.xsmall};
margin-right: ${({ theme }) => theme.sizes.small};
width: 20px;
height: 20px;
cursor: pointer;
`
