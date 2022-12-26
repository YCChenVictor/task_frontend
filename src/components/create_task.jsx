import React, { useState } from 'react';
import TaskModal from "./task_modal.jsx";

function CreateTask() {
  const MyContext = React.createContext();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={setModalOpen}
        className="bg-white absolute top-4 right-4 rounded-sm p-2"
      >Create Task</button>
      <MyContext.Provider value={{ modalOpen, setModalOpen }}>
        <TaskModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          MyContext={MyContext}
        />
      </MyContext.Provider>
    </div>
  );
}

export default CreateTask;
