import Modal from "react-modal";
import { Container } from "./styles";
import logoImg from "../../../assets/logo.svg";

export function SignIn({ setopenSignModal, openSignModal }) {
  function handleCloseModal() {
    setopenSignModal(false);
  }

  return (
    <>
      <Modal
        isOpen={openSignModal}
        onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <img src={logoImg} alt="Logo" />
          <h2>Start now for free</h2>
          <p>Create your account and make the change.</p>
          <div>
            <label htmlFor="name">Full name</label>
            <input id="name" type="text" />
            <label htmlFor="email">Your best email</label>
            <input id="email" type="email" />
            <label htmlFor="name">Phone</label>
            <input id="phone" type="phone" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
          <button type="submit">Create Account</button>
          <p>
            I already have an account <a>Log in</a>
          </p>
        </Container>
      </Modal>
    </>
  );
}
