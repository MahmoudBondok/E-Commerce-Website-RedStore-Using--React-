import React from 'react'
import About from '../components/About/About';
import Brand from '../components/Brand/Brand';
import Client from '../components/Client/Client';
import Header from '../components/home/Header';
import Product from '../components/Product/Product';

function HomePage() {
    return (
        <>
            <Header />
            <Product />
            <About />
            <Client />
            <Brand />
        </>
    )
}

export default HomePage;