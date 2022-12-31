import React, { useContext } from 'react';
import Modal from "react-modal";

function CreateTaskModal(props) {
  const { taskModalOpen, setTaskModalOpen } = useContext(props.MyContext);
  return(
    <Modal
      ariaHideApp={false} // TODO: remove it and fix the errors
      isOpen={Boolean(taskModalOpen)}
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
        onClick={() => setTaskModalOpen(false)}
      >Close Modal</button>
    </Modal>
  )
}

export default CreateTaskModal;
