import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

const Spacing = styled.div `
 padding: 0 22px;
 a {
     text-direction: none;
     color: #411;
     font-size: 18px;
 }
`;
const Flex = styled.div`
    background: #cc3;
    width: 100%;
    display: flex;
    flex-flox: row;
    justify-content: center;
`;
const DashBoard = ()=> {
    return(
        <div>
        <h1>Dash Board</h1>
        <Flex>
    <Spacing>
    <NavLink to='/Profile'>Stylist Profile</NavLink>
    </Spacing>
    <Spacing>
    <NavLink to='/New_Stylist'>Add New Stylist</NavLink>
    </Spacing>
    <Spacing>
    <NavLink to='/Logout'>Logout</NavLink>
    </Spacing>
    
    </Flex>
        </div>
    );
}
export default DashBoard;