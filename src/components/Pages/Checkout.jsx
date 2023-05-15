import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Checkout = () => {
    const {user} = useContext(authContext);
    const service = useLoaderData();
    const {_id, img, price, title} = service;
    const navigate = useNavigate();
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const bookings = {name, email, date, due:price, service_img:img, service_id:_id, title}
        fetch('https://car-doctor-server-mahdi105.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Booking Successful');
                navigate('/');
            }
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div className='py-20 px-10 container mx-auto'>
            <h1 className='text-center font-bold text-3xl mb-5'>This is Checkout page: {title}</h1>
            <div className="card flex-shrink-0 w-3/5 mx-auto shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleBooking}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Customer Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" defaultValue={user && user.email}/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due</span>
                                </label>
                                <input type="number" name='number' placeholder="Service Cost" className="input input-bordered" defaultValue={price}/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Delivery Date</span>
                                </label>
                                <input type="date" name='date' placeholder="13/05/2023" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Book Now !</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;