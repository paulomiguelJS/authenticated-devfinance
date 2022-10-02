import { useState } from "react";
import logoImg from "../../assets/logo.svg";;
import { Avatar } from "../Avatar/index";
import { DropdownItem } from "../DropdownItem";
import * as S from "./styles";



export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownToggling = () => setIsOpen(!isOpen);

  return (
    <S.Container>
      <S.Content>
        <h2>
          <img src={logoImg} alt="Financial Manager" />
          Financial<span>Manager</span>
        </h2>

        <div onClick={dropdownToggling}>
          <Avatar src={logoImg} />
          <S.DropDownListContainer isOpen={isOpen}>
            <DropdownItem name="My Profile" />
            <DropdownItem name="Edit Profile" />
            <DropdownItem name="Settings" />
            <DropdownItem name="Logout" />
          </S.DropDownListContainer>
        </div>
      </S.Content>
    </S.Container>
  );
}
