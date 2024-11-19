import './App.css'

import { countAtom, evenSelector } from './store/atoms/Count'

import { RecoilRoot,  useRecoilValue, useSetRecoilState } from 'recoil'

function App() {
    return (
        <RecoilRoot>
            <Count />
        </RecoilRoot>
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
    const count = useRecoilValue(countAtom)

    return (
        <>
            <p>{count}</p>
            <EvenOrNot/>

        </>
    )
}

function EvenOrNot() {

    const isEven = useRecoilValue(evenSelector)

    return <div>
        {isEven ? 'it is even' : <br />}
    </div>
}

function Buttons() {
    const setCount = useSetRecoilState(countAtom)

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
