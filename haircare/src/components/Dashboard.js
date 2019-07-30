import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
const DashBoard = ()=> {
    return(
        <div>
        <h1>Dash Board</h1>
        {props.hide}
        <div className='nav-background'>
    <NavLink to='/Profile'>Stylist Profile</NavLink>
    <NavLink to='/New_Stylist'>Add New Stylist</NavLink>
    <NavLink to='/Logout'>Logout</NavLink>
    </div>
        </div>
    );
}
export default DashBoard;