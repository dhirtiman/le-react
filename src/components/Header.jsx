// import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom"

export default function Header() {

    const navigate = useNavigate();



    return (
        <div>
            routing and shi
            <br></br>
            {/* <Link to="/">Landing</Link>
            <Link to="/dashboard">Dashboard</Link> */}

            <button onClick={()=>{
                navigate('/')    }}>Landing</button>

            <button onClick={()=>{
                navigate('/dashboard')
            }}>Dashboard</button>
        </div>
    )
}
