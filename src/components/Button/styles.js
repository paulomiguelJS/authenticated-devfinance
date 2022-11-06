import styled from "styled-components";

export const Btn = styled.button`
padding: 0.7rem;
width: ${(props) => (props.variant === "smaller" ? "85%" : "100%")};

background-color: ${(props) =>
  props.theme === "green" ? "#45e7ab" : "#306cea"};
 
border-radius: 0.25rem;
border: ${(props) => (props.theme === "green" ? "#45e7ab" : "#306cea")};

font-weight: bold;
letter-spacing: 1px;
color: #f0f2f5;
transition: fi 0.2s; 

   &:hover {
    filter: brightness(1.1);
`;
