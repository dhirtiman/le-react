import { useMemo } from 'react'
import { useEffect, useState } from 'react'

function App() {
    const [exchange1Data, setExchange1Data] = useState({})
    const [exchange2Data, setExchange2Data] = useState({})
    const [bankData, setBankData] = useState({})

    useEffect(() => {
        // Some operation to get the data
        setExchange1Data({
            returns: 100,
        })
    }, [])

    useEffect(() => {
        // Some operation to get the data
        setExchange2Data({
            returns: 100,
        })
    }, [])

    useEffect(() => {
        // Some operation to get the data
        setTimeout(() => {
            setBankData({
                income: 100,
            })
        }, 1000)
    }, [])
    
    const cryptoReturns = useMemo(() => {
        console.log('hi there before')
        return exchange1Data.returns + exchange2Data.returns
    }, [exchange1Data, exchange2Data])

    const incomeTax = useMemo(()=>{return (cryptoReturns + bankData.income) * 0.3},[cryptoReturns,bankData.income])

    return <div>hi there, your income tax returns are {incomeTax}</div>
}

export default App
