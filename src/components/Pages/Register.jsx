import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authImage from '/images/images/login/login.svg'
import { authContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(authContext);
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)){
            alert('Password must contain at least Uppercase letter, Lowercase letter, number, special character and minimum 6 characters');
            return;
        };
        if(password !== confirm){
            alert('Your password is incorrect');
            return;
        };
        createUser(email, password)
        .then(result => {
            form.reset()
            alert('Registration successfull');
            navigate('/login');
        })
        .catch(error => console.log(error.message))

    }
    return (
        <main>
        <div className="hero min-h-screen bg-base-200 py-24">
            <div className="hero-content flex-col gap-12 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={authImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register Now</h1>

                        {/* Registration Form */}
                        <form onSubmit={handleRegister} className='mb-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confrim Password</span>
                                </label>
                                <input type="password" placeholder="Confirm password" name='confirm' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p>Already have an account? <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
};

export default Register;