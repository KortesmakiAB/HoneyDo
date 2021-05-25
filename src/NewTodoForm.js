import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ addTodo }) => {

    const initialState = {
        task: ''
    };

    const [taskFormInput, setTaskFormInput] = useState(initialState)

    const handleSubmit = (evt) => {
        evt.preventDefault();

        addTodo({
            ...taskFormInput,
            id: uuid()
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
        <form className="formClass" onSubmit={ handleSubmit }>
            <label htmlFor="new-task">New task</label>
            <input 
                type="text" 
                id="new-task"
                name="task"
                value={ taskFormInput.task }
                placeholder="Honey-Do List Items"
                onChange={ handleChange }    
            >
            </input>
            <button>Add Task</button>
        </form>
    );
};

export default NewTodoForm;