import React, { useState } from 'react';

function countInitial() {
  console.log('run function')
  return 4
}

function App() {
  //只會跑一次初始值countInitial()
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')
  //會一直跑初始值countInitial()
  // const [count, setCount] = useState(countInitial())

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setTheme('green')
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('red')
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
