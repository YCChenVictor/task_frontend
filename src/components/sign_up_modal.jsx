import React, { useContext, useState } from 'react';
import Modal from "react-modal";

function SignUpModal(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signUpModalOpen, setSignUpModalOpen } = useContext(props.MyContext);
  return(
    <Modal
      ariaHideApp={false} // TODO: remove it and fix the errors
      isOpen={Boolean(signUpModalOpen)}
    >
      <h1>Sign Up</h1>
      <form>
        <label>
          email:
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
      <button
        onClick={() => PostSignUpInfo({ username:username, password:password })}
      >Sign Up</button>
      <br/>
      <button
        onClick={() => setSignUpModalOpen(false)}
      >Close Modal</button>
    </Modal>
  )
}

function PostSignUpInfo(params) {
  debugger
  fetch("http://localhost:5000/sign_up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ params }),
  })
    .then((r) => r.json())
    .then((user) => console.log(user));
}

export default SignUpModal;
