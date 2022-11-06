import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  height: 100vh;
  margin: 0 auto;
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
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80vh;
    width: 70%;

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

    color: ${(props) => props.theme["black-200"]};

    h5 {
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    label {
      font-size: 1rem;
      font-weight: 600;
      margin: 0.5rem 0;

      &:last-of-type {
        margin-top: 2rem;
      }
    }

    input {
      padding: 1.3rem 0.5rem;
      height: 2.5rem;
      border: 0.5px solid ${(props) => props.theme["gray-300"]};
      border-radius: 0.25rem;

      outline: none;
      transition: 0.5s;

      &::placeholder {
        font-size: 0.8rem;
      }

      &:active,
      :focus {
        border: 1px solid ${(props) => props.theme["blue-200"]};
      }
    }

    Button {
      margin-top: 2rem;

      &:last-of-type {
        margin: 2rem auto;
      }
    }

    a {
      margin-top: 1rem;
      font-size: 0.8rem;
      text-align: end;
      text-decoration: none;

      color: ${(props) => props.theme["blue-600"]};
      text-decoration: none;
      transition: 0.5s;

      &:hover {
        color: ${(props) => props.theme["blue-200"]};
      }

      &:visited {
        color: none;
      }
    }
  }
`;
