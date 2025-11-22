import React from 'react';
import './Todo.css';

const Todo = ({task, isDone}) => {
    console.log(task, isDone);
    return (
        <div className='todo'>
            <li>Task: {task}</li>
            {isDone ? <p>Yes, Complete</p> : <p>No, can not Complete</p>}
            {isDone && <p>Yes, you are a good boy.</p>}
            {isDone || <p>You need to be serious.</p>}
        </div>
    );
};

export default Todo;