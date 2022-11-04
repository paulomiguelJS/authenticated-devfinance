import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h2 {
    color: ${(props) => props.theme["gray-600"]};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  div {
    label {
      padding-bottom: 1rem;
    }
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    margin: 0.5rem 0;

    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${(props) => props.theme["green-200"]};
    color: ${(props) => props.theme["white-100"]};
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }

  a {
    color: red;
  }
`;
