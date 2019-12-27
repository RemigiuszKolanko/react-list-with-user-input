import React, { useState } from 'react';

import TodoList from './components/TodoList/TodoList';
import InputField from './components/InputField/InputField';

import './App.css';

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, text: 'Finish CSS Course to improve skills related with grid and flex.' },
    { id: 2, text: 'Finish MERN stack course to have possibility to do my own projects.' }
  ]);

  const newGoalHandler = (newGoal) => {
    setTodoList(prevState => prevState.concat(newGoal));
  }

  return <div className="list-container">
    <h1>The todo list</h1>
    <InputField onNewGoal={newGoalHandler} />
    <TodoList todoList={todoList} />
  </div>;
};

export default App;
