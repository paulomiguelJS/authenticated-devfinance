import styled from "styled-components";

export const DropDownItem = styled.ul`
  li {
    display: flex;
    justify-content: center;
    list-style: none;
    width: 6rem;

    a {
      color: ${(props) => props.theme["gray-600"]};
      font-size: 1rem;
      font-weight: 500;
      text-align: center;
      text-decoration: none;

      &:hover {
        filter: brightness(1.5);
      }
    }
  }
`;
