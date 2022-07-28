import React from 'react';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { YoutubePlayer } from '../components/Elements/YoutubePlayer';
import { SubTitle } from '../components/Typography/SubTitle';
import { Text } from '../components/Typography/Text';
import { Title } from '../components/Typography/Title';
import {
    Container,
    VideoContainer,
    IconsContainer,
    DownloadsContainer,
    BsClockIcon,
    BsHeartIcon,
    BsShareIcon
} from '../styles/player';

const Player = () => {
    return (
        <Container>
            <VideoContainer>
                <YoutubePlayer
                    videoId='G0x6DJ9eVsM'
                />
                <Title
                    content='Video1'
                />
                <SubTitle
                    content='Canal1'
                />
                <Text
                    content='35345 views - 1 year ago'
                />
                <Text
                    content='343 likes'
                />
            </VideoContainer>
            <IconsContainer>
                <BsHeartIcon />
                <BsClockIcon />
                <BsShareIcon />
            </IconsContainer>
            <DownloadsContainer>
                <PrimaryButton
                    ariaLabel='Download video'
                    onClick={() => { }}
                    title='Download video'
                />
                <PrimaryButton
                    ariaLabel='Download audio'
                    onClick={() => { }}
                    title='Download audio'
                />
            </DownloadsContainer>
        </Container>
    )
}

export default Player