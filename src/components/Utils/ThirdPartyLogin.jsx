import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const ThirdPartyLogin = () => {
    const {googleSignIn} = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            alert('Login Successful');
            navigate(from, {replace:true})
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleLogin} className="btn btn-circle font-bold text-xl btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default ThirdPartyLogin;