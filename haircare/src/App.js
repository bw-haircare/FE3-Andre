import React from 'react';
import './App.css';
import User from './components/UserRegistration';
import Login from './components/Login';
import {Route} from 'react-router-dom';
import Navigation from './components/Stylistpage';
import ProfilePage from './components/StylistProfile';
import NewStylist from './components/NewStylist';
import Logout from './components/Logout';
import DashBoard from './components/Dashboard';
function App() {
  return (
    <div className="App">
      <DashBoard />
      <switch>
      <Route path='/Profile/' component={ProfilePage} />
      <Route path='/New_Stylist/' component={NewStylist} />
      <Route path='/Logout/' component={Logout} />
      </switch>
      <User />
      <Login />
    </div>
  );
}

export default App;
