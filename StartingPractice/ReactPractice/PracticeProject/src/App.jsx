import { useCallback, useEffect, useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Child from './Child';
import './App.css';

function App() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem('count') | 0)
  })
  const [cc, setCc] = useState(1);
  const childCount = useCallback(() => {
    console.log("in the childCount",cc);
  },[cc])
  console.log(cc);
  useEffect(() => {
    console.log("component gets mounted");
    return () => {
      console.log("component removed");
    };
  },[]);

  useEffect(() => {
    localStorage.setItem('count',JSON.stringify(count));
  },[count]);

  // const isEven = useMemo(() => {
  //   console.log("in isEven");
  //   let i=0;
  //   while(i < 2000000000) i++
  //   return count%2 === 0
  // },[cc])
  
  const increaseValue = () => {
    if(count < 20){
      setCount(count + 1);
      // setCc(cc + 1);
    }
  }
  const decreaseValue = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }
  return (
    <>
      <h1>This is a basic counter</h1>
      <h3>Counter value : {count}</h3>
      <br />
      <div className="buttons">
        <button onClick={increaseValue}>+</button>
        {/* <span>{isEven?"Even":"Odd"}</span> */}
        <button onClick={decreaseValue}>-</button>
      </div>
      <Child printCall={childCount} />
    </>
  );
}

export default App;