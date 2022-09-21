import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Avatar } from "../Avatar/index";
import { DropdownItem } from "../DropdownItem";
import { Container, Content, DropDownListContainer } from "./styles";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <Container>
      <Content>
        <h2>
          <img src={logoImg} alt="Financial Manager" />
          Financial<span>Manager</span>
        </h2>

        <div onClick={toggling}>
          <Avatar src={logoImg} />
          {isOpen && (
            <DropDownListContainer>
              <DropdownItem name="My Profile" />
              <DropdownItem name="Edit Profile" />
              <DropdownItem name="Settings" />
              <DropdownItem name="Logout" />
            </DropDownListContainer>
          )}
        </div>
      </Content>
    </Container>
  );
}
