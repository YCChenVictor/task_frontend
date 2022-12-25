import React, { useState } from 'react';
import Modal from "react-modal";

function CreateTask() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={setModalOpen}
        className="bg-white absolute top-4 right-4 rounded-sm p-2"
      >Create Task</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <div>Modal</div>
        <div>Modal</div>
        <div>Modal</div>
        <div>Modal</div>
        <div>Modal</div>
        <div>Modal</div>

        <button
          onClick={() => setModalOpen(false)}
        >Close Modal</button>
      </Modal>
    </div>
  );
}

export default CreateTask;
