import React from 'react';
import { useState } from 'react';
import './App.css';
import { ColorBox } from './components/ColorBox';


function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [history, setHistory] = useState([]);


  function handleChangeGreen(event: any) {
    setGreen(event.target.value)
  }

  function handleChangeBlue(event: any) {
    setBlue(event.target.value)
  }


  return (
    <>
      <ColorBox backgroundColor={`rgb(${red}, ${green}, ${blue})`} />
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

      <h3>Blue: {blue}</h3>

      <input
        type="range"
        min={0}
        max={255} 
        value={blue}
        onChange={handleChangeBlue} />

       <p><button onClick={() => setHistory((h) => [[red, green, blue], ...h]) }>Adiocionar Histórico</button></p>
    </>
  );
}

export default App;
