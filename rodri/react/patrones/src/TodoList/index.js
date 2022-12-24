import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList">
      {props.error && props.onError()} {/* This ocurr when the error is true */}
      {props.loading && props.onLoading()} {/* This ocurr when the loading is true */}
      {!props.searchValue && !props.loading && !props.searchedTodos.length && props.onEmptyTodos()} {/* This ocurr when the loading is false and the searchedTodos is empty and there is no searchValue */}
      {props.searchValue && !props.loading && !props.searchedTodos.length && props.onEmptySearchResults( props.searchValue )} {/* This ocurr when the loading is false and the searchedTodos is empty and there is a searchValue */}
      {!props.loading && props.searchedTodos.map(renderFunc)} {/* This ocurr when the loading is false and the searchedTodos is not empty */}
    </section>
  );
}

export { TodoList };
