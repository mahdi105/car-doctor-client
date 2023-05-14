import React from "react";
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {
    const {_id, img, title, price} = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`} className="btn btn-primary">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;