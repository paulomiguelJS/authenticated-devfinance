import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme["blue-200"]};
  height: 100vh;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 80vh;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 4px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${(props) => props.theme["blue-600"]};

  img {
    margin-bottom: 10px;
  }

  h4 {
    color: ${(props) => props.theme["white-400"]};
  }
`;

export const RightSide = styled.div`
  flex: 2;

  background: ${(props) => props.theme["white-400"]};

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 40%;
    padding: 2rem 1rem;
    color: ${(props) => props.theme["grey-600"]};
  }
  h5 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  label {
    font-size: 1.2rem;
    margin: 0.5rem 0;

    &:last-of-type {
      margin-top: 2rem;
    }
  }

  input {
    padding: 0 0.5rem;
    height: 2.2rem;
    border: 0.5px solid ${(props) => props.theme["grey-300"]};
    border-radius: 4px;

    &::placeholder {
      font-size: 0.8rem;
    }
  }
  a {
    margin-top: 0.5rem;
    text-align: end;
    font-size: 0.8rem;
  }

  button {
    margin-top: 3rem;
    padding: 0.7rem;
    background-color: ${(props) => props.theme["blue-200"]};
    border: 0px;
    border-radius: 4px;
    border: 0.5px solid ${(props) => props.theme["grey-300"]};
    font-weight: bold;
    letter-spacing: 1px;
  }
`;
