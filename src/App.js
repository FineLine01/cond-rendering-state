import './App.css';
import { useState, useEffect } from 'react';
import  UserProfile  from './UserProfile.js';
import  { AvailabilityCheck }  from './AvailabilityCheck';
import  Counter  from './Counter';
import ColorPicker from './ColorPicker';
import LoginLogout from './LoginLogout';

function App() {

  return (
    <div className="App">

      <h1>Adding logic</h1>
    <AvailabilityCheck />
    <LoginLogout />
    <Counter />
    <ColorPicker />
    <UserProfile />
    

    </div>
  ); 
}

export default App;
