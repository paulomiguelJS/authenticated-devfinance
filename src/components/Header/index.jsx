import logoImg from "../../assets/logo.svg";
import { Avatar } from "../Avatar";

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
          {" "}
          <button type="button" onClick={onOpenNewTransactionModal}>
            New Transaction
          </button>
          <Avatar src={logoImg} />
        </div>
      </Content>
    </Container>
  );
}
