import React from "react";
import { UseLocalStorage } from "./UseLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const { items: todos, saveItems: saveTodos, loading, error } = UseLocalStorage('TODOS_V1', []);

  const [openModal, setOpenModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  React.useEffect(() => {
    console.log('items', totalTodos);
  }, [totalTodos]); // This will run every time items changes

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      completeTodo,
      deleteTodo,
      searchedTodos,
      openModal,
      setOpenModal
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };