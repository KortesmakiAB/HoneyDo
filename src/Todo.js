import React from 'react';

const Todo = ({ id, task, isChecked, updateCheck }) => {

    const handleCheck = evt => {
        const { id } = evt.target;

        isChecked = isChecked ? false : true;

        updateCheck({
            isChecked,
            id,
            task
        });
    };
    
    return (
        <li>
            <label htmlFor={id}></label>
            <input 
                id={id} 
                name="checkbox" 
                type="checkbox" 
                onChange={ handleCheck }>
            </input>
            <span>{ task }</span>
        </li>
    );
};

export default Todo;