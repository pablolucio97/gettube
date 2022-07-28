import styled from "styled-components";

export const Container = styled.a`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white100};
  max-width: 240px;
  margin: ${({ theme }) => theme.spacings.tiny};
  word-wrap: break-word;
  cursor: pointer;
  @media (max-width: 1024px){
    margin: .2rem auto;
    width: 100%;
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;