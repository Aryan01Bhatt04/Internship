import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  const countRef = useRef(count)
  const increment = () => {
    setCount(count + 1)
    countRef.current = countRef.current + 1;

    
    console.log(count);
    console.log(countRef.current);
  }
  
  return (
    <>
      <h1>This is a basic counter</h1>
      <h3>Counter value : {count} </h3>
      <br />
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>    
    </>
  )
}

export default App
