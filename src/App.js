import React from 'react';

import TodoList from './components/TodoList/TodoList';

import './App.css';

const App = () => {

  const todoList = [
    {id: 1, text: 'Finish CSS Course to improve skills related with grid and flex.'},
    {id: 2, text: 'Finish MERN stack course to have possibility to do my own projects.'}

  ];
  return <div className="list-container">
    <h1>The todo list</h1>
    <TodoList todoList={todoList}/>
  </div>;
};

export default App;
