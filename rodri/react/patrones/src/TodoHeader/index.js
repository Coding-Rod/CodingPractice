import React from "react";

function TodoHeader({ children, loading }) {
    const newChildren = React.Children.toArray(children).map(child => React.cloneElement(child, { loading }));
    return (
        <header>
            <h1>Todo App</h1>
            {newChildren}
            {/* {React.cloneElement(children, { loading })} */}
            {/* {children} */}
        </header>
    );
}

export { TodoHeader };