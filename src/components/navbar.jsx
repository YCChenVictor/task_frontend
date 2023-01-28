import React, { useState } from "react";
import CreateTaskModal from "./create_task_modal.jsx"
import LoginModal from './login_modal.jsx'
import SignUpModal from './sign_up_modal.jsx'

function Navbar() {
  const TaskModalContext = React.createContext();
  const LoginModalContext = React.createContext();
  const SignUpModalContext = React.createContext();
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  return (
    <div id="navbar">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              task
            </a>
            <div className="absolute top-4 right-4 rounded-sm p-2">
              <button
                onClick={setTaskModalOpen}
                className="bg-white p-2"
              >Create Task</button>
              <button
                onClick={setLoginModalOpen}
                className="bg-white p-2"
              >Login</button>
              <button
                onClick={setSignUpModalOpen}
                className="bg-white p-2"
              >Sign Up</button>
            </div>
            <TaskModalContext.Provider value={{ taskModalOpen, setTaskModalOpen }}>
              <CreateTaskModal
                taskModalOpen={taskModalOpen}
                setTaskModalOpen={setTaskModalOpen}
                MyContext={TaskModalContext}
              />
            </TaskModalContext.Provider>
            <LoginModalContext.Provider value={{ loginModalOpen, setLoginModalOpen }}>
              <LoginModal
                ariaHideApp={false}
                loginModalOpen={loginModalOpen}
                setLoginModalOpen={setLoginModalOpen}
                MyContext={LoginModalContext}
              />
            </LoginModalContext.Provider>
            <SignUpModalContext.Provider value={{ signUpModalOpen, setSignUpModalOpen }}>
              <SignUpModal
                ariaHideApp={false}
                SignUpModalOpen={signUpModalOpen}
                setSignUpModalOpen={setSignUpModalOpen}
                MyContext={SignUpModalContext}
              />
            </SignUpModalContext.Provider>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
