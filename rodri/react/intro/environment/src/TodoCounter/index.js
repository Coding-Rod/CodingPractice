import React from "react";
import './TodoCounter.css';
import { TodoContext } from '../context';

function TodoCounter() {
    const { completedTodos: completed, totalTodos: total } = React.useContext(TodoContext);
    
    return (
        <h2 className="TodoCounter">You have completed {completed} of {total} TODOs</h2>
    );
}

export { TodoCounter };