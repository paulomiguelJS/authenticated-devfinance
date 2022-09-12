import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
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
    border: 1px solid red;

    div {
      display: flex;
      flex-direction: column;

      img {
        margin-top: 30px;
      }
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: darkblue;

  div {
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 70%;
  }

  form {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    width: 90%;
  }
`;
