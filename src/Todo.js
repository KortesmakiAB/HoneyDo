import React from 'react';
import './Todo.css';

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

    const spanTag = !isChecked ? <span>{ task }</span> : <span style={{textDecoration: 'line-through'}}>{ task }</span>
    
    return (
        <li className="Todo-noBullet">
            <label htmlFor={id}></label>
            <input 
                id={id} 
                name="checkbox" 
                type="checkbox" 
                onChange={ handleCheck }
                className="Todo-input"
            >
            </input>
            { spanTag }
        </li>
    );
};

export default Todo;