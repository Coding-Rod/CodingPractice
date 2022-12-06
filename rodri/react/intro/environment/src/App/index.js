import React from 'react';
import { AppUi } from './AppUi';
import { UseLocalStorage } from '../utils/UseLocalStorage';

function App() {
  const [items, saveItem] = UseLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = items.filter(item => !!item.completed).length;
  const totalTodos = items.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = items;
  } else {
    searchedTodos = items.filter(item => {
      const todoText = item.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  

  const completeTodo = (id) => {
    const todoIndex = items.findIndex(item => item.id === id);
    const newTodos = [...items];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveItem(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = items.findIndex(todo => todo.id === id);
    const newTodos = [...items];
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos);
  };

  return (
    <AppUi
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      searchedTodos={searchedTodos}
    />
  );
}

export default App;
