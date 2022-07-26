import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index:2;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;



