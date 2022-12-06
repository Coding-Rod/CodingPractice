import React from "react";
import './TodoCounter.css';

// const styles = {
//     color: "#000",
//     backgroundColor: "#fff",
// };

function TodoCounter({completedTodos, totalTodos}) {
    return (
        // <h2 style={styles} >Has completado 2 de 3 TODOs</h2>
        <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };