import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
    const { isAuthenticated, user } = useAuth0();
    //user : an object contains the user info (name,email,etc)
    //isAuthenticated : a boolean to check if the user is logged in(authenticated), used to conditionally render the info 

    return isAuthenticated && (<div>Hello {user.name}</div>);
}

export default Profile;