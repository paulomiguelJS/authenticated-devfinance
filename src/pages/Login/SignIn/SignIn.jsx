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
            <input id="name" type="text" placeholder="Your name" />

            <label htmlFor="email">Your best email</label>
            <input id="email" type="email" placeholder="joe@email.com" />
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="phone" placeholder="(603) 111 2121" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="********" />
          </div>
          <button type="submit">Create Account</button>
          <span>
            I already have an account <a>Log in</a>
          </span>
        </Container>
      </Modal>
    </>
  );
}
