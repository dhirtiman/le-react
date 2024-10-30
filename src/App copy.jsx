/* eslint-disable react/prop-types */
import './App.css';
import { useState } from 'react';
import CustomButton from './components/Card';
// const todo = {id: 1, name: 'bobo', description: 'eat some bobo' , done: false,}
// todos = [{id: 1, name: 'bobo', description: 'eat some bobo' , done: false,}{id: 2, name: 'bobe', description: 'eat some bobe' , done: true,}]

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    { id: 1, name: 'bobo', description: 'eat some bobo', done: false },
    { id: 2, name: 'bobe', description: 'eat some bobe', done: true },
  ]);


  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const doneTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );

    setTodos(newTodos);

    console.log(id, newTodos);
  };

  const todoItems = todos.map((todo) => (
    <Todo
      todo={todo}
      key={todo.id}
      removeTodo={removeTodo}
      doneTodo={doneTodo}
    ></Todo>
  ));

  return (
    <>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <ul>{todoItems}</ul>
    </>
  );
}

function Todo({ todo, removeTodo, doneTodo }) {
  const strikethroughStyle = {
    textDecoration: todo.done ? 'line-through' : 'none',
  };

  return (
    <li>
      <div style={strikethroughStyle}>{todo.name}</div>
      <div style={strikethroughStyle}>{todo.description}</div>
      <button onClick={() => removeTodo(todo.id)}>❌</button>
      <button
        onClick={() => {
          doneTodo(todo.id);
        }}
      >
        ✅
      </button>
    </li>
  );
}

export default App;
