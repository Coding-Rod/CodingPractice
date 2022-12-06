import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUi({ totalTodos, completedTodos, searchValue, setSearchValue, completeTodo, deleteTodo, searchedTodos, loading, error }) {
  return (
    <React.Fragment>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            text={todo.text}
            key={todo.id}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
  );
}

export { AppUi };