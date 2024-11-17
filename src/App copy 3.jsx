import './App.css'

import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
const Dashboard = React.lazy(()=> import ('./components/Dashboard'))
const Landing = React.lazy(()=> import ('./components/Landing'))
import Header from './components/Header'
import { Suspense } from 'react'

function App() {
    return (
        <>

        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path='/' element={<Suspense fallback={'loading'}><Landing/></Suspense>}></Route>
                <Route path='/dashboard' element={<Suspense fallback={'loading'}><Dashboard/></Suspense>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
   

export default App
