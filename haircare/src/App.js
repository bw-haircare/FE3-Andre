import React from 'react';
import './App.css';
import User from './components/UserRegistration';
import Login from './components/Login';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <User />
      <Login />
    </div>
  );
}

export default App;
