import React, { useContext } from 'react';
import Modal from "react-modal";

function TaskModal(props) {
  const { modalOpen, setModalOpen } = useContext(props.MyContext);
  return(
    <Modal
      isOpen={modalOpen}
    >
      <form>
        <label>
          Project:
          <input type="text" name="name" />
        </label>
        <label>
          Spec:
          <input type="text" name="name" />
        </label>
        <label>
          Price:
          <input type="text" name="name" />
        </label>
      </form>
      <button
        onClick={() => setModalOpen(false)}
      >Close Modal</button>
    </Modal>
  )
}

export default TaskModal;
