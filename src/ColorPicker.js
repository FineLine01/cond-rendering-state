import { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState('red');

    function changeColor() {
        setColor('blue');
    } 
    return (
        <div>
            <button onClick={changeColor}>Change color</button>
            <p> The current color is {color} ! </p>
        </div>
    )
}
export default ColorPicker