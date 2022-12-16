import React from 'react';
import './TodoList.css'

function TodoList(props) {

  console.log(props.searchedTodos)
  return (
    <section className="TodoList">
      {props.error && props.onError()} {/* This ocurr when the error is true */}
      {props.loading && props.onLoading()} {/* This ocurr when the loading is true */}
      {!props.loading && !props.searchedTodos.length && props.onEmptyTodos()} {/* This ocurr when the loading is false and the searchedTodos is empty */}
      {props.searchedTodos.map(todo => props.render(todo))} {/* This ocurr when the loading is false and the searchedTodos is not empty */}
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
