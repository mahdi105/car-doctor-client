import React from 'react';

const TableRaw = ({ booking, handleDelete, confirmBooking }) => {
    const { _id, service_img, title, due, date, status } = booking;
    console.log(status);
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={service_img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}{status && status}</div>
                    </div>
                </div>
            </td>
            <td>
                <p className='font-bold text-purple-500'>{due}</p>
            </td>
            <td><p>{date}</p></td>
            <th>
                {
                    status === "confirm" ?
                        <span className="btn btn-success text-white btn-xs">Confirmed</span>
                        :
                        <button onClick={() => confirmBooking(_id)} className="btn btn-error btn-xs">Confirm Now</button>
                }
            </th>
        </tr>
    );
};

export default TableRaw;