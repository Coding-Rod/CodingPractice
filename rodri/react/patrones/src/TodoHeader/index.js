import React from "react";

function TodoHeader({ children, loading }) {
    return (
        <header>
            <h1>Todo App</h1>
            {React.cloneElement(children, { loading })}
            {/* {children} */}
        </header>
    );
}

export { TodoHeader };