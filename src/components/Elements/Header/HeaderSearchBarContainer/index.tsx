import { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';

interface HeaderSearchBarContainerProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;

}

export function HeaderSearchBarContainer({
  children,
  style,
  className
}: HeaderSearchBarContainerProps) {
  return (
    <Container
      style={style}
      className={className}
    >
      {children}
    </Container>
  )
}