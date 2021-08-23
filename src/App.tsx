import React from 'react';
import { useState } from 'react';

import './App.css';

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [count, setCount] = useState(0)
  const [blue, setBlue] = useState(0);

  function handleNumber() {

    setCount(count+1)


  }

  function handleChangeGreen(event: any){
    setGreen(event.target.value)
  }

  function handleChangeBlue(event: any){
    setBlue(event.target.value)
  }

 


  return (
    <>
      <h3>Red: {red}</h3>

      <input
        type="range"
        min={0}
        max={255}
        value={red}
        onChange={({ target }) => setRed(parseInt(target.value))} />

      <h3>Green: {green}</h3>

      <input
        type="range"
        min={0}
        max={255}
        value={green}
        onChange={handleChangeGreen} />

        <h1>{count}</h1>
        <button onClick={handleNumber}>+</button>
        <button onClick={() => setCount(count -1)}>-</button> 


      <h3>Blue: {blue}</h3>

      <input
        type="range"
        min={0}
        max={255}
        value={blue}
        onChange={handleChangeBlue} />
    </>
  );
}

export default App;
