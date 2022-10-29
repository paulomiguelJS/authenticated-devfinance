import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  height: 100vh;
  margin: 0 auto;

  .text {
    max-width: 1220px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background: ${(props) => props.theme["blue-600"]};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80vh;
    width: 80%;

    background: ${(props) => props.theme["blue-200"]};

    box-shadow: -1px 1px 15px rgba(0, 0, 0, 0.07),
      -20px 1px 60px rgba(0, 0, 0, 0.07);

    border-radius: 0.25rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 50%;

      h4 {
        color: ${(props) => props.theme["white-400"]};
        font-size: 1.2rem;
        text-align: center;
        line-height: 1.7rem;
      }

      img {
        margin-bottom: 20px;
        display: block;
      }
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80vh;
    width: 80%;

    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.07),
      20px 1px 60px rgba(0, 0, 0, 0.07);

    border-radius: 0.25rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 2rem 1rem;
    height: 60vh;
    width: 60%;

    color: ${(props) => props.theme["-600"]};

    h5 {
      font-size: 2rem;
      text-align: center;

      margin-bottom: 2rem;
    }

    label {
      text-align: le;
      font-size: 1.2rem;
      margin: 0.5rem 0;

      &:last-of-type {
        margin-top: 2rem;
      }
    }
    input {
      padding: 0.1rem 0.5rem;
      height: 2.5rem;
      border: 0.5px solid ${(props) => props.theme["gray-300"]};
      border-radius: 0.25rem;

      outline: none;
      border: 1px solid ${(props) => props.theme["blue-200"]};
      transition: 0.5s;

      &::placeholder {
        font-size: 0.8rem;
      }
    }

    a {
      margin-top: 1rem;
      text-align: end;
      font-size: 0.8rem;

      color: ${(props) => props.theme["-600"]};
      text-decoration: none;
      transition: 0.5s;

      &:hover {
        color: ${(props) => props.theme["blue-200"]};
      }

      &:visited {
        color: none;
      }
    }

    button {
      margin-top: 5rem;
      padding: 0.7rem;

      background-color: ${(props) => props.theme["blue-200"]};
      border-radius: 0.25rem;
      border: ${(props) => props.theme["blue-200"]};

      font-weight: bold;
      letter-spacing: 1px;
      color: ${(props) => props.theme["white-400"]};
      transition: background-color 0.2s;
      &:hover {
        background-color: ${(props) => props.theme["blue-600"]};
      }
    }
  }
`;
