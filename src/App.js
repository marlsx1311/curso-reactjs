import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de react', completed: false},
  { text: 'llorar con la llorona', completed: false}
];

function App() {
  const[todos, setTodos]= React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length
  
  return (
    <React.Fragment>
      <TodoCounter/>
        total={totalTodos}
        completed={completedTodos}
        hola
      <TodoSearch
      searchValue ={searchValue}
      setSearchValue ={setSearchValue}
      />
      <TodoList>
        {todos.map(todo => (
          <TodoItem kye={todo.text} 
          text= {todo.text}
          completed = {todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
    
  );
}

export default App;
