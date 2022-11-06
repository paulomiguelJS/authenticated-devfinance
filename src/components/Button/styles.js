import styled from "styled-components";

export const Btn = styled.button`
margin-top: 5rem;
padding: 0.7rem;
width: ${(props) => (props.variant === "smaller" ? "80%" : "")};

background-color: ${(props) =>
  props.theme === "blue" ? '["blue-200"]' : '["white-400"]'};
border-radius: 0.25rem;
border: ${(props) => props.theme["blue-200"]};

font-weight: bold;
letter-spacing: 1px;
color: ${(props) => props.theme["white-400"]};
transition: background-color 0.2s; 

   &:hover {
  background-color: ${(props) => props.theme["blue-600"]}; 
`;
