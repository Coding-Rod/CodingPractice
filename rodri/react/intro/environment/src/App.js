import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';

// import './App.css';

const todos = [
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Learn Firebase', completed: false },
  { id: 3, text: 'Learn GraphQL', completed: false },
];

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem text={todo.text} key={todo.id}/>
        ))}
      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
