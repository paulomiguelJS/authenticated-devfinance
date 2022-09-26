import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme["blue-600"]};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    position: relative;
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

export const DropDownListContainer = styled.div`
  position: absolute;
  top: 8px;
  opacity: ${(isOpen) => (isOpen ? "1" : "0")};
  right: 60px;
  z-index: 2;
  padding: 1rem 0.5rem;
  background: #ffffff;
  border-radius: 0.25rem;
  transition: height 0.3s ease-in-out;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 10px;
    right: -20px;
    width: 0px;
    height: 0px;
    border-right: 10px solid transparent;
    border-left: 10px solid #ffffff;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
`;
