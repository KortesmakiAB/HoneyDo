import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import Todo from './Todo';

const TodoList = () => {
   
    const [todos, setTodos] = useState([]);

    const addTodo = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    };

    const updateCheck = todoObj => {
        setTodos(todos =>  todos.map(todo => todo.id === todoObj.id ? todoObj : todo ));
    }

    const removeTasks = () => {
        setTodos(todos => todos.filter(todo => !todo.isChecked)) ;
    }
    
    return (
        <div>
            <NewTodoForm addTodo={ addTodo } />
            <button className="TodoList-remove" onClick={ removeTasks }>Remove Task</button>
            <ul className="TodoList-ul">
                { todos.map(({ id, task, isChecked }) => 
                    <Todo 
                    key={id}
                    id={id}
                    task={task}
                    isChecked={isChecked}
                    updateCheck={updateCheck}
                />)}
            </ul>
        </div>
    );
};

export default TodoList;