import React from 'react';

import './TodoList.css';

const TodoList = ({ todoList }) => {
    
    const list = todoList.map(item => {
        return <li key={item.id}>{item.text}</li>
    });

    return <ul className="todo-list">
        {list}
    </ul>;
}

export default TodoList;