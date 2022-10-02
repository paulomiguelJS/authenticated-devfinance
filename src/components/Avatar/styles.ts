import styled from "styled-components";

export const ProfilePic = styled.img`
    height: 3rem;
    border-radius: 50%;

    box-sizing: initial;
    border: 2px solid ${(props) => props.theme["green-200"]};
    outline: 2px solid ${(props) => props.theme["blue-200"]};
    
    cursor: pointer;
  }
`;
