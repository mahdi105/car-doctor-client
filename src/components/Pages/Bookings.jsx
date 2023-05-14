import React, { useContext, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import TableRaw from '../Utils/TableRaw';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(authContext);

    // Get All Bookings regarding the Current USER
    useState(() => {
        fetch(`http://localhost:5000/bookings?email=${user && user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
            .catch(error => console.log(error.message))
    }, [])
    console.log(bookings);
    // PATCH / PUT(Update) ==> Confirm a booking
    const confirmBooking = (id) => {
        const proceed = confirm('Are you sure');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'confirm' })
            })
                .then(res => res.json())
                .then(data => {
                   
                        alert('Booking is confirmed');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        const confirmed = bookings.find(booking => booking._id === id);
                        confirmed.status = 'confirm';
                        const updatedBookings = [...remaining, confirmed];
                        setBookings(updatedBookings);
                    
                })
                .catch(error => console.log(error.message))
        }
    }
    // DELETE a Booking
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Booking is Cancelled');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
            .catch(error => console.log(error.message))
    }
console.log(bookings);
    return (
        <main className='container px-10 mx-auto py-20'>
            <h1 className='text-3xl font-bold mb-8 text-center'>Bookings: {bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Delete
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Due</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <TableRaw handleDelete={handleDelete} confirmBooking={confirmBooking} booking={booking} key={booking._id}></TableRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Bookings;