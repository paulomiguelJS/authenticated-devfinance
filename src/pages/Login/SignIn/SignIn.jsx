import Modal from "react-modal";
import { Container } from "../styles";

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
          <label htmlFor="name">Full name</label>
          <input id="name" type="text" />
          <label htmlFor="email">Your best email</label>
          <input id="email" type="email" />
          <label htmlFor="name">Phone</label>
          <input id="phone" type="phone" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
          <button>Create Account</button>
        </Container>
        <p>
          I already have an account <a>Log in</a>
        </p>
      </Modal>
    </>
  );
}
