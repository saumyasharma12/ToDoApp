import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem.jsx';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
