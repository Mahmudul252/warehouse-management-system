import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import AdvancedFeatures from '../AdvancedFeatures/AdvancedFeatures';
import Items from '../Items/Items';
import LearnMore from '../LearnMore/LearnMore';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="container mt-5">
                <Items></Items>
                <Link className='btn btn-secondary my-5 w-25 d-block mx-auto' to='/manage-inventories'>Manage Inventories</Link>
            </div>
            <LearnMore></LearnMore>
            <AdvancedFeatures></AdvancedFeatures>
            <Footer></Footer>
        </div>
    );
};

export default Home;