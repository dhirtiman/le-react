/* eslint-disable react/prop-types */



import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([])

  function getData() {
    axios.get('https://dummyjson.com/todos')
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
  }

  useEffect(() => {
    setInterval(() => {
      getData();
    }, n * 1000)
    getData();
  }, [n])

  return {
    todos: todos,
    loading: loading
  };
}

function App() {
  const { todos, loading } = useTodos(500);

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  return (
    <>
      {todos.map(todo => <Track todo={todo} key={todo.id} />)}
    </>
  )
}

function Track({ todo }) {
  return <div className='bg-gray-200 p-4 rounded-md shadow-md mb-4 hover:bg-gray-300 transition-colors'>
    <p className='text-gray-500 text-sm mb-1'>#{todo.id}</p>
    <h1 className='text-2xl font-bold mb-2 text-gray-800'>{todo.todo}</h1>
    <p className={`text-sm font-medium ${todo.completed ? 'text-green-600' : 'text-red-600'}`}>
      {todo.completed ? 'Completed' : 'Not Completed'}
    </p>
  </div>
}

export default App