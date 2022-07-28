import React, { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';

interface AsideProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function Aside({ children, className, style }: AsideProps) {
    return (
        <Container
            style={style}
            className={className}
        >
            {children}
        </Container>
    )
}