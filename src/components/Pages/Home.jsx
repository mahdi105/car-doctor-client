import React from 'react';
import Banner from '../Utils/Banner';
import About from '../Utils/About';
import Services from '../Utils/Services';

const Home = () => {
    return (
        <main className='container mx-auto px-10 py-5'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </main>
    );
};

export default Home;