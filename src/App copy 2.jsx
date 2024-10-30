/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    axios.get('https://dummyjson.com/todos').then((response) => {
      setTodos(response.data.todos);
    });
  }, []);
  return (
    <div>
      <CardWrapper>
        <TextComponent> </TextComponent>
      </CardWrapper>
      <div style={styles.container}>
        <h1>Todo List</h1>
        <ul style={styles.todoList}>
          {todos.map((todo) => (
            <li key={todo.id} style={styles.todoItem}>
              <span
                style={todo.completed ? styles.completedTodo : styles.todoText}
              >
                {todo.todo}
              </span>
              <button
                style={styles.toggleButton}
                onClick={() => toggleCompleted(todo.id)}
              >
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <span style={styles.userId}>User ID: {todo.userId}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '600px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  todoList: {
    listStyleType: 'none',
    padding: 0,
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  todoText: {
    flexGrow: 1,
    fontSize: '16px',
  },
  completedTodo: {
    flexGrow: 1,
    fontSize: '16px',
    textDecoration: 'line-through',
    color: 'gray',
  },
  toggleButton: {
    padding: '6px 12px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#28a745',
    color: 'white',
    cursor: 'pointer',
  },
  userId: {
    marginLeft: '10px',
    fontSize: '12px',
    color: '#888',
  },
};

function TextComponent() {
  return (
    <>
      <p>Hi there</p>
    </>
  );
}

function CardWrapper({ children }) {
  return <div style={{ border: '1px solid black' }}>{children}</div>;
}

export default App;
