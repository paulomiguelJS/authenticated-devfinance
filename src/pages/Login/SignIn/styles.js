import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${(props) => props.theme["gray-600"]};
    font-size: 1.5rem;
    margin: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      margin: 0.2rem 0;
      padding: 0;
    }
  }

  input {
    width: 100%;
    height: 3rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    padding-left: 1rem;
    margin-bottom: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: ${(props) => props.theme["blue-600"]};
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

  span {
    margin-top: 1rem;
    a {
      color: ${(props) => props.theme["blue-200"]};
      font-weight: bold;
      cursor: pointer;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
