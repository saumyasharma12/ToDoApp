import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import AddTask from './components/AddTask/AddTask.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>To-Do Application</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
