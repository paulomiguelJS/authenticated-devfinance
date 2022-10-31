import Modal from "react-modal";

export function SignIn({ setopenSignModal, openSignModal }) {
  function handleCloseModal() {
    setopenSignModal(false);
  }

  return (
    <>
      <Modal isOpen={openSignModal} onRequestClose={handleCloseModal}>
        <h1>Sign Modal</h1>
      </Modal>
    </>
  );
}
