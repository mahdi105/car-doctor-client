import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import authImage from '/images/images/login/login.svg'
import { authContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {signIn, user} = useContext(authContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            form.reset();
            alert('Login Successful')
        })
        .catch(error => console.log(error.message))
    }
    return (
        <main>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-12 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={authImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className='mb-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" defaultValue={user && user.email} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>Not a memeber yet? <Link to='/register' className='text-orange-500 font-bold'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
};

export default Login;