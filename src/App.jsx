import './App.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import Header from './components/Header'

function App() {
    return (
        <>

        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path='/' element={<Landing/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
   

export default App
