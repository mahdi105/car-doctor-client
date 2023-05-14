import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
    .catch(error => console.log(error.message));
   },[])
    return (
        <section>
            <div>
                <p className="text-center text-orange-600 mb-2">Services</p>
                <h2 className='text-center mb-5 font-extrabold text-4xl'>Our Services Area</h2>
                <p className='text-center w-2/4 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
                    {
                        services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;