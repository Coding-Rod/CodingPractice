import React from "react";
import '../styles/TodoCounter.css';

// const styles = {
//     color: "#000",
//     backgroundColor: "#fff",
// };

function TodoCounter() {
    return (
        // <h2 style={styles} >Has completado 2 de 3 TODOs</h2>
        <h2 className="TodoCounter">Has completado 2 de 3 TODOs</h2>
    );
}

export { TodoCounter };