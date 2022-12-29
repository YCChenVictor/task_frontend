import React, { useState } from 'react';
import TaskModal from './task_modal.jsx';
import LoginModal from './login_modal.jsx'

function CreateTask() {
  const TaskModalContext = React.createContext();
  const LoginModalContext = React.createContext();
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div>
      <div className="absolute top-4 right-4 rounded-sm p-2">
        <button
          onClick={setTaskModalOpen}
          className="bg-white p-2"
        >Create Task</button>
        <button
          onClick={setLoginModalOpen}
          className="bg-white p-2"
        >Login</button>
      </div>
      <TaskModalContext.Provider value={{ taskModalOpen, setTaskModalOpen }}>
        <TaskModal
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
    </div>
  );
}

export default CreateTask;
