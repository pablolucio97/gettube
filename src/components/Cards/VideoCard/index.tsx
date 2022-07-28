import React from 'react';
import { Container, VideoPreviewContainer } from './styles';
import { SubTitle } from '../../Typography/SubTitle'
import { Text } from '../../Typography/Text'

export function VideoCard() {
    return (
        <Container>
            <VideoPreviewContainer />
            <SubTitle
                content='Video1'
            />
            <Text
                content='35345 views - 1 year ago'
            />
            <Text
                content='Canal1'
            />
        </Container>
    )
}