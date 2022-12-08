import React from "react";

function TodoHeader({ children }) {
    return (
        <header>
            <h1>Todo App</h1>
            {children}
        </header>
    );
}

export { TodoHeader };