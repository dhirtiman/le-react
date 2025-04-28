import { useEffect, useState } from 'react';


function useCheckOnline(){
  const [online,setOnline] = useState(navigator.onLine);

  useEffect(()=>{
    window.addEventListener('online',()=>{
      setOnline(true);
    })

    window.addEventListener('offline',()=>{
      setOnline(false);
    })

    return () => {
      window.removeEventListener('online',()=>{})
      window.removeEventListener('offline',()=>{})
    }
    
    
  },[])



  return online;
}


function App() {
  const online = useCheckOnline();

  return (
    <>
      {online ? 'you sir , are online' : 'you sir , are offline'}
    </>
  )
}


export default App