import { CSSProperties } from 'react';
import Link from 'next/link'
import { Container } from './styles';

interface AsideLinkProps {
  content: string;
  url: string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}

export function AsideLink({
  content,
  url,
  onClick,
  style,
  className
}: AsideLinkProps) {
  return (
    <Link href={url} passHref>
      <Container
        style={style}
        className={className}
        onClick={onClick}
      >
        {content}
      </Container>
    </Link>
  )
}