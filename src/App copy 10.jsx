import { useEffect, useState } from 'react';


const useInterval = (c,delay) => {

  useEffect(()=>{
    const interval = setInterval(c,delay)
    return ()=>clearInterval(interval)
  },[c,delay])
}


function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App