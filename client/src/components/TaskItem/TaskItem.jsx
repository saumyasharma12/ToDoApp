import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions.js';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task-item">
      <span>{task.name}</span>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;
