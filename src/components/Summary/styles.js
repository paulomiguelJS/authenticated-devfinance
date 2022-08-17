import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7.4rem;

  div {
    background: ${(props) => props.theme["white-100"]};

    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      border: 0;
    }
    &.highlight-background {
      background: ${(props) => props.theme["green-200"]};
      color: ${(props) => props.theme["white-400"]};
    }
  }

  @media (max-width: 835px) {
    grid-template-columns: none;
  }
`;
