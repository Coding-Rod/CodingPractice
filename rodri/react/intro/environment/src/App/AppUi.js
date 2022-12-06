import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../context';

function AppUi() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoContext.Consumer>
        {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => (
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
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />

    </React.Fragment>
  );
}

export { AppUi };