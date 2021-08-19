import React from 'react';
import { useState } from 'react';

import './App.css';

function App() {
  const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // function handleChangeGreen(){
  //   setGreen()
  // }

  

  return (
    <>
      <h3>Red: {red}</h3>

      <input
        type="range"
        min={0}
        max={255}
        value={red}
        onChange={({ target }) => setRed(parseInt(target.value))} />

      {/* <h3>Green: {green}</h3>

      <input
        type="range"
        min={0}
        max={255}
        value={green}
        onChange={handleChangeGreen} />

      <h3>Blue: {blue}</h3>

      <input
        type="range"
        min={0}
        max={255}
        value={blue}
        onChange={({ target }) => setRed(parseInt(target.value))} /> */}
    </>
  );
}

export default App;
