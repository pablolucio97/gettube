import styled from "styled-components";

export const Container = styled.div`
  width: 640px;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
