import React, { useContext } from 'react';
import Modal from "react-modal";

function LoginModal(props) {
  const { loginModalOpen, setLoginModalOpen } = useContext(props.MyContext);
  return(
    <Modal
      ariaHideApp={false} // TODO: remove it and fix the errors
      isOpen={Boolean(loginModalOpen)}
    >
      <form>
        <label>
          email:
          <input type="text" name="name" />
        </label>
        <label>
          password:
          <input type="text" name="name" />
        </label>
      </form>
      <button
        onClick={() => setLoginModalOpen(false)}
      >Close Modal</button>
    </Modal>
  )
}

export default LoginModal;
