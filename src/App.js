import './App.css';
import { useState, useEffect } from 'react';
import  UserProfile  from './components/UserProfile';
import  { AvailabilityCheck }  from './components/AvailabilityCheck';
import  Counter  from './components/Counter';
import ColorPicker from './components/ColorPicker';
import LoginLogout from './components/LoginLogout';

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
