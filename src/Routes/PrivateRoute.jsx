import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return <p className='text-purple-600 text-4xl font-bold text-center py-20'>Loading...</p>
    } 
    if(user.email){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace>Login</Navigate>
};

export default PrivateRoute;