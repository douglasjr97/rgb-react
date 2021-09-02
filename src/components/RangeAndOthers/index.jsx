import { useState } from 'react';
import { ColorBox } from '../ColorBox';
import { History } from '../History';
// import '../App.css';
import '../../App.css'
export function RangeAndOthers() {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [history, setHistory] = useState([]);

    const isColorInHistory = history.some(
        (rgb) => JSON.stringify(rgb) === JSON.stringify([red, green, blue])
    );


    function handleChangeGreen(event: any) {
        setGreen(event.target.value)
    }

    function handleChangeBlue(event: any) {
        setBlue(event.target.value)
    }

    function generateRandom(event: any) {
        setRed(Math.floor(Math.random(event.target.value) * 256))
        setGreen(Math.floor(Math.random(event.target.value) * 256))
        setBlue(Math.floor(Math.random(event.target.value) * 256))
    }

    const backgroundColor = (r, g, b) => `rgb(${r}, ${g}, ${b})`;


    return (
        <>
            <ColorBox backgroundColor={backgroundColor(red, green, blue)} />
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

            <p><button onClick={generateRandom}>Gerar cor Aleatória</button></p>

            <p><button onClick={() => setHistory((h) => [[red, green, blue], ...h])}
                disabled={isColorInHistory}
            >
                Adiocionar Histórico</button></p>

            <hr />

            <History data={history} backgroundColor={backgroundColor} />

        </>
    );
}