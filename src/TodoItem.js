import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert("aqui completamos el todos " + props.text)
    
  };

  const onDelete = () => {
    alert("aqui borraste el todos " + props.text)
  };

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };