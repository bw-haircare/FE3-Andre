import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const Login = ()=> {
    const [creds, setCreds] = useState({
        username: '', password: ''
    });
     
    return (
        <div className="login-wrapper">
          <h1>Hair Care App</h1>
          
          <button className='user'>User Sign Up</button>
          <button className='stylist'>Stylist Sign Up</button>
        </div>
    )
}
export default Login;