import Modal from "react-modal";

export function RecoverPassword({ setopenRecoverModal, openRecoverModal }) {
  function handleCloseModal() {
    setopenRecoverModal(false);
  }

  return (
    <>
      <Modal isOpen={openRecoverModal} onRequestClose={handleCloseModal}>
        <h1>Recover Modal</h1>
      </Modal>
    </>
  );
}
