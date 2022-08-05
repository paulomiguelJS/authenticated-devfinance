import styled from "styled-components";

export const container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: ${(props) => props.theme["grey-300"]};
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${(props) => props.theme["grey-300"]};
      color: ${(props) => props.theme["grey-600"]};
      border-radius: 0.25rem;

      &:first-child {
        color: ${(props) => props.theme["grey-300"]};
      }

      &.deposit {
        color: ${(props) => props.theme["green-300"]};
      }

      &.withdraw {
        color: ${(props) => props.theme["grey-300"]};
      }
    }
  }
`;
