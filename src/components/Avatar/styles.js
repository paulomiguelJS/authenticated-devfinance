import styled from "styled-components";

export const ProfilePic = styled.img`
    box-sizing: initial;
    height: 3rem;
    border-radius: 50%;

    box-sizing: initial;
    height: 3rem;
    border-radius: 2rem;
    border: 2px solid ${(props) => props.theme["green-200"]};
    outline: 2px solid ${(props) => props.theme["blue-200"]};
    
    cursor: pointer;
  }
`;
