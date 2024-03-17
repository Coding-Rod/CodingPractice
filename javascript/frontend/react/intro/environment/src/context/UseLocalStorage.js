import React from "react";

// const defaultTodos = [
//   { id: 1, text: 'Learn React', completed: true },
//   { id: 2, text: 'Learn Firebase', completed: false },
//   { id: 3, text: 'Learn GraphQL', completed: false },
// ];

function UseLocalStorage(itemName, defaultItem) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [items, setItem] = React.useState(defaultItem);
    
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
    
    
                if (!localStorageItem) {
                    localStorage.setItem('TODOS_V1', JSON.stringify(defaultItem));
                    parsedItem = defaultItem;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                
                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);               
            }
        }, 1000);
    });

    const saveItems = (newTodos) => {
        try {
            const stringifiedTodos = JSON.stringify(newTodos);
            localStorage.setItem('TODOS_V1', stringifiedTodos);
            setItem(newTodos);
        } catch (error) {
            setError(error);
        }
    }
    return {
        items, 
        saveItems,
        loading,
        error
    };
}


export { UseLocalStorage };