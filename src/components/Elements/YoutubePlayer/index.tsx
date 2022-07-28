import React, { CSSProperties } from 'react';
import { Container } from './styles';

interface YoutubePlayerProps {
    videoId: string;
    style?: CSSProperties;
    className?: string;
}

export function YoutubePlayer({ videoId, style, className }: YoutubePlayerProps) {
    return (
        <Container
            src={`https://www.youtube.com/embed/${videoId}`}
            width={640}
            height={400}
            style={style}
            className={className}
        />

    )
}