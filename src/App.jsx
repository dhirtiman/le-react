import { useState, useEffect } from 'react'

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
}

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const debouncedValue = useDebounce(inputValue, 500) // 500 milliseconds debounce delay

    // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

    useEffect(() => {}, [debouncedValue])

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search..."
            />
            <div>
                {debouncedValue}
            </div>
        </>
    )
}

export default App
