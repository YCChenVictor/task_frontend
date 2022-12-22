import React, { useState } from "react";
import Modal from "react-modal";

function createTask() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={setModalOpen}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <div>Modal</div>

        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default createTask;
