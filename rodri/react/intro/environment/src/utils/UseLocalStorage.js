import React from "react";

// const defaultTodos = [
//   { id: 1, text: 'Learn React', completed: true },
//   { id: 2, text: 'Learn Firebase', completed: false },
//   { id: 3, text: 'Learn GraphQL', completed: false },
// ];

function UseLocalStorage(itemName, defaultTodos) {
    const localStorageTodos = localStorage.getItem(itemName);
    let parsedTodos;
    
    
    if (!localStorageTodos) {
        localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
        parsedTodos = defaultTodos;
    } else {
        parsedTodos = JSON.parse(localStorageTodos);
    }

    const [items, saveItem] = React.useState(parsedTodos);

    const saveTodos = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem('TODOS_V1', stringifiedTodos);
        saveItem(newTodos);
      }

    return [items, saveTodos];
}

export { UseLocalStorage };