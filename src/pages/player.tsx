import React from 'react';
import {
    Container,
    VideoContainer,
    IconsContainer,
    DownloadsContainer
} from '../styles/player';

const Player = () => {
    return (
        <Container>
            <VideoContainer>
                <iframe
                    src="https://www.youtube.com/embed/TXFOSt9uli4"
                 
                />
            </VideoContainer>
            <IconsContainer>

            </IconsContainer>
            <DownloadsContainer>

            </DownloadsContainer>
        </Container>
    )
}

export default Player