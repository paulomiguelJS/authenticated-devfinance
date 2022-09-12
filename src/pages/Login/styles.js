import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  height: 100vh;
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
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 46px 0px;
    border-radius: 4px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      h4 {
        color: ${(props) => props.theme["white-400"]};
        font-size: 1.2rem;
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

    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 46px 0px;
    border-radius: 4px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 2rem 1rem;
    height: 60vh;
    width: 60%;

    color: ${(props) => props.theme["grey-600"]};

    h5 {
      font-size: 1.5rem;
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
      padding: 0 0.5rem;
      height: 2.5rem;
      border: 0.5px solid ${(props) => props.theme["grey-300"]};
      border-radius: 4px;

      &::placeholder {
        font-size: 0.8rem;
      }
    }

    a {
      margin-top: 1rem;
      text-align: end;
      font-size: 0.8rem;

      color: ${(props) => props.theme["grey-600"]};
      text-decoration: none;

      &:visited {
        color: none;
      }
    }

    button {
      margin-top: 5rem;
      padding: 0.7rem;

      background-color: ${(props) => props.theme["blue-200"]};
      border-radius: 4px;
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
