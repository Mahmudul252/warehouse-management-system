import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Items from '../Items/Items';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="container mt-5">
                <Items></Items>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;