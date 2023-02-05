import React, { useContext, useState } from 'react';
import Modal from "react-modal";

function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginModalOpen, setLoginModalOpen } = useContext(props.MyContext);

  const PostLoginInfo = (params) => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => {
      return res.json()
    }).then((data) => {
      localStorage.setItem('logged in', data.token);
    }).catch(error => {
      console.log(error)
    })
  }

  return(
    <Modal
      ariaHideApp={false} // TODO: remove it and fix the errors
      isOpen={Boolean(loginModalOpen)}
      className='rounded-lg dark:bg-gray-700 max-w-2xl md:h-auto'
    >
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white"
      >Login</h1>
      <form>
        <label>
          email:
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
      <div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
        <button
          onClick={() => PostLoginInfo({ email:email, password:password })}
          className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >Login</button>
        <button
          onClick={() => setLoginModalOpen(false)}
        >Close</button>
      </div>
    </Modal>
  )
}

export default LoginModal;
