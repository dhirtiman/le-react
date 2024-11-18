import { useState } from 'react'
import './App.css'
import { useContext } from 'react'
import { CountContext } from './contexts/CountContext'

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <CountContext.Provider value={{ count, setCount }}>
                <Count />
            </CountContext.Provider>
        </>
    )
}

function Count() {
    return (
        <>
            <CountRenderer />
            <Buttons />
        </>
    )
}

function CountRenderer() {
    const { count } = useContext(CountContext)

    return <p>{count}</p>
}

function Buttons() {
    const { setCount } = useContext(CountContext)

    return (
        <>
            <button
                onClick={() => {
                    setCount((count) => count + 1)
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    setCount((count) => count - 1)
                }}
            >
                -
            </button>
        </>
    )
}

export default App
