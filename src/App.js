import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de react', completed: false},
  { text: 'llorar con la llorona', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
    
  );
}

export default App;
