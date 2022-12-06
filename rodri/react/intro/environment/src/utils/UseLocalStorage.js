import React from "react";

function UseLocalStorage(itemName, defaultTodos) {
    const localStorageTodos = localStorage.getItem(itemName);
    let parsedTodos;
    
    
    if (!localStorageTodos) {
        localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
        parsedTodos = defaultTodos;
    } else {
        parsedTodos = JSON.parse(localStorageTodos);
    }

    const [todos, setTodos] = React.useState(parsedTodos);

    const saveTodos = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem('TODOS_V1', stringifiedTodos);
        setTodos(newTodos);
      }

    return [todos, saveTodos];
}

export { UseLocalStorage };