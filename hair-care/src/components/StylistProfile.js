import React from 'react';
import styled from 'styled-components';
const Wrap = styled.div`
    background: #cc3;
    
    width: 250px;
    height: 350px;
    margin: 0 auto;
`;
const ProfilePage = ()=> {
    return (
        <div>
        <h1>Stylist Profile</h1>
        <Wrap>Style</Wrap>
        </div>
    );
}
export default ProfilePage;