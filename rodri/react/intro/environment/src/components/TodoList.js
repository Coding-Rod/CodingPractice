import React from "react";
import '../styles/TodoList.css';

function TodoList(props) {
    return (
        <ul className="TodoList">
        {props.children}
        </ul>
    );
}

export { TodoList };