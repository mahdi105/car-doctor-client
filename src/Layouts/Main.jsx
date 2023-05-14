import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const Main = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;