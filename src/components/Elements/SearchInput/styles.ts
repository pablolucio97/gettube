import styled from "styled-components";

export const Input = styled.input`
  width: 656px;
  height: 56px;
  padding: .8rem;
  background: ${(props) => props.theme.colors.white100};
  color: ${(props) => props.theme.colors.background_primary};
  letter-spacing: 1.2px;
  border: none;
  border-radius: 4px;
  font-size: ${(props) => props.theme.sizes.large};
  margin: ${(props) => props.theme.sizes.large} 0;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary};
  }
  &:disabled {
    opacity: .8;
  }

  @media(max-width: 1024px){
    width: 90%;
  }

`;
