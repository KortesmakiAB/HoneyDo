import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

const NewTodoForm = ({ addTodo }) => {

    const initialState = {
        task: ''
    };

    const [taskFormInput, setTaskFormInput] = useState(initialState)

    const handleSubmit = (evt) => {
        evt.preventDefault();

        addTodo({
            ...taskFormInput,
            id: uuid(),
            isChecked: false
        });

        setTaskFormInput(initialState);
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setTaskFormInput(() => ({
            [name]: value
        }));
    };

    return (
        <form className="NewTodoForm" onSubmit={ handleSubmit }>
            <label className="NewTodoForm-label" htmlFor="new-task">New task</label>
            <input 
                type="text" 
                id="new-task"
                className="NewTodoForm-input"
                name="task"
                value={ taskFormInput.task }
                placeholder=" Honey-Do List Items"
                onChange={ handleChange }    
            >
            </input>
            <button>Add Task</button>
        </form>
    );
};

export default NewTodoForm;