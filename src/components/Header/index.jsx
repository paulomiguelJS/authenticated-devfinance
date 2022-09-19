import logoImg from "../../assets/logo.svg";
import { Avatar } from "../Avatar";
import { DropdownItem } from "../Avatar/DropdownItem";
import { Container, Content } from "./styles";

export function Header({ onOpenNewTransactionModal, props }) {
  return (
    <Container>
      <Content>
        <h2>
          <img src={logoImg} alt="Financial Manager" />
          Financial<span>Manager</span>
        </h2>

        <div>
          <button type="button" onClick={onOpenNewTransactionModal}>
            New Transaction
          </button>
          <div>
            <Avatar src={logoImg} />
            <DropdownItem name="My Profile" />
            <DropdownItem name="Edit Profile" />
            <DropdownItem name="Settings" />
            <DropdownItem name="Logout" />
          </div>
        </div>
      </Content>
    </Container>
  );
}
