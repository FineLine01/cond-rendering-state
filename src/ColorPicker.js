import { useState } from "react";
// import useState hook

function ColourPicker() {
    // initiate the state variable
    const [colour, setColour] = useState('red');

    function changeColour() {
        if (colour === 'red') {
           setColour('blue');
        } else {
          setColour('red');
        } 
    }
    return (
      <div style={{ backgroundColor: colour === 'red' ? "crimson" : 'darkblue' }}>
        <button onClick={changeColour}>Change colour</button>
        <p style= {{ color: 'white'}}>The current colour is {colour}</p>
      </div>
    )
  }
  
  export default ColourPicker