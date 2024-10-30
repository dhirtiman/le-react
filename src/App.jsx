import { useState, useMemo } from 'react'
import './App.css'
import {} from 'react'

function App() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(null)

    const sum = useMemo(() => {
        let temp = 0
        for (let i = 1; i <= value; i++) {
            temp += i
        }
        return temp
    }, [value])

    // dsd
    return (
        <>
            <input
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                value={value}
            ></input>

            <p>Sum from 1 to {value} is:{sum} </p>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Counter:{count}
            </button>
        </>
    )
}

export default App
