import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
   
    const [todos, setTodos] = useState([]);

    const addTodo = newTodo => {
        setTodos(todos => [...todos, newTodo] );
    };
    
    return (
        <div>
            <NewTodoForm addTodo={ addTodo } />
            <button className="remove">Remove Task</button>
            <ul>
                { todos.map(({ task, id }) => 
                    <li>
                        <Todo key={id} task={task} />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default TodoList;