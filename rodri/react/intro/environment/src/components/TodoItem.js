import React from 'react';
import '../styles/TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert('Completado');
  };

  const onDelete = () => {
    alert('Eliminado');
  };

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };