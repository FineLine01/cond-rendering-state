import './App.css';
import { useState, useEffect } from 'react';
import  UserProfile  from './UserProfile.js';
import  { AvailabilityCheck }  from './AvailabilityCheck';
import  Counter  from './Counter';

function App() {
  // const a = 15;
  // const b = 25;
  // const sum = a + b;

  // const c = 200;
  // const d = 15;

  // const quotient = a / b;
  return (
    <div className="App">

      <h1>Adding logic</h1>
    <AvailabilityCheck />
    {/* <UserProfile /> */}
    <Counter />
    

      {/* {
       sum > 30
       ?
       <p>The sum is higher than 30</p>
       :
       <p style={{backgroundColor:'red', color:'#fff'}}>
        Error: lower than 30
       </p>
      
      <p>The quotient of {c} and {d} is {quotient}</p> } */}

    </div>
  ); 
}

export default App;
