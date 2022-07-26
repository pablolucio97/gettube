import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: .8rem;
  background: ${(props) => props.theme.colors.white100};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: 4px;
  font-size: ${(props) => props.theme.sizes.medium};
  margin: 0;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary};
  }
  &:disabled {
    opacity: .8;
  }
`;
