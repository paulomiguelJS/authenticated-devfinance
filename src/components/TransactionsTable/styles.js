import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  display: block;
  width: 100%;
  overflow-x: auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    border: 1px splid red;

    th {
      color: ${(props) => props.theme["grey-300"]};
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
      text-align: left;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${(props) => props.theme["white-100"]};
      color: ${(props) => props.theme["grey-300"]};
      border-radius: 0.25rem;

      &:first-child {
        color: black;
      }

      &.deposit {
        color: ${(props) => props.theme["green-200"]};
      }

      &.withdraw {
        color: ${(props) => props.theme["red-300"]};
      }
    }
  }
`;
