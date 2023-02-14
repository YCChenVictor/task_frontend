import React, { useContext, useState } from 'react';
import Modal from 'react-modal';

function CreateTaskModal(props) {
  const [project, setProject] = useState('');
  const [spec, setSpec] = useState('');
  const [price, setPrice] = useState(0);

  const { taskModalOpen, setTaskModalOpen } = useContext(props.MyContext);

  const token = localStorage.getItem('logged in');
  const PostTask = (params) => {
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(params),
    }).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data);
    }).catch(error => {
      console.log(error)
    })
  }

  return(
    <Modal
      ariaHideApp={false} // TODO: remove it and fix the errors
      isOpen={Boolean(taskModalOpen)}
      className='rounded-lg dark:bg-gray-700 max-w-2xl md:h-auto'
    >
      <h1 className='text-xl font-semibold text-gray-900 dark:text-white'
      >Create Task</h1>
      <form>
        <div>
          <label>
            Project:
          </label>
          <input
              type='text'
              value={project}
              placeholder='Project'
              onChange={(e) => setProject(e.target.value)}
            />
        </div>
        <br />
        <div>
          <label>
            Spec:
          </label>
          <textarea
            value={spec}
            placeholder='Spec'
            onChange={(e) => setSpec(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>
            Price:
          </label>
          <input
            type='number'
            value={price}
            placeholder='Price'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </form>
      <div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
        <button
          onClick={() => PostTask({ project:project, spec:spec, price:price })}
          className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >Create</button>
        <button
          onClick={() => setTaskModalOpen(false)}
        >Close Modal</button>
      </div>
    </Modal>
  )
}

export default CreateTaskModal;
