// mouse position shower

import { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);

  useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
      setX(e.clientX)
      setY(e.clientY)
    })

    return ()=>{
      window.removeEventListener('mousemove',(e)=>{
        setX(e.clientX)
        setY(e.clientY)
      })
    }
  },[])


  return [x,y]
}






function App(){

  const [x,y] = useMousePosition();
  
  return (
    <>
      <p>Your mouse position is {x} , {y}</p>
    </>
  )
}

export default App;