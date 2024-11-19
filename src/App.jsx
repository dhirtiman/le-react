import { RecoilRoot } from 'recoil'
import './App.css'
import { useRecoilState } from 'recoil'
import {
    filteredTodosSelector,
    filterAtom,
    todosAtom,
} from './store/atoms/todo'
import { useSetRecoilState } from 'recoil'
import { useRecoilValue } from 'recoil'
import { useState } from 'react'

function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <h1>Todos and shi</h1>
                <br />
                <AddTodo />
                <br />
                <br />
                <FilterTodo />
                <Todos />
            </div>
        </RecoilRoot>
    )
}

function AddTodo() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const setTodos = useSetRecoilState(todosAtom)

    const addTodo = () => {
        const id = Math.floor(Math.random() * 1000)
        const newTodo = {
            id,
            title,
            description,
        }
        setTodos((todos) => [...todos, newTodo])
    }

    return (
        <>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
        </>
    )
}

function Todos() {
    const todos = useRecoilValue(filteredTodosSelector)

    return (
        <>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                    </div>
                )
            })}
        </>
    )
}

function FilterTodo() {
    const [filter, setFilter] = useRecoilState(filterAtom)
    return (
        <>
            <input
                type="text"
                placeholder="Filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </>
    )
}

export default App
