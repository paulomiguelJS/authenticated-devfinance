import Modal from "react-modal";
import { Container } from "./styles";

import logoImg from "../../../assets/logo.svg";

export function RecoverPassword({ setOpenRecoverModal, openRecoverModal }) {
  function handleCloseModal() {
    setOpenRecoverModal(false);
  }

  return (
    <>
      <Modal
        isOpen={openRecoverModal}
        onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <img src={logoImg} alt="Logo" />
          <h2>Reset your password</h2>
          <div>
            <label htmlFor="email">Your email</label>
            <input id="email" type="email" placeholder="joe@email.com" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="********" />
          </div>
          <button type="submit">Reset Password</button>
        </Container>
      </Modal>
    </>
  );
}
