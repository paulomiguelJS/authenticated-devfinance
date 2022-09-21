import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme["blue-600"]};
`;
export const DropDownListContainer = styled.div`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    border: 3px solid green;
  }
  }
  h2 {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-600"]};
    font-weight: 200;

    img {
      margin-right: 0.5rem;
    }
    span {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${(props) => props.theme["white-400"]};
    }
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: ${(props) => props.theme["green-200"]};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
