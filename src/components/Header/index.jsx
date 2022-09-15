import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

export function Header({ onOpenNewTransactionModal }) {
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
          <button type="button">
            Paulo Miguel
            <img src="" alt="Profile" />
          </button>
        </div>
      </Content>
    </Container>
  );
}
