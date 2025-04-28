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
  const { todos, loading } = useTodos(5);

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
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App