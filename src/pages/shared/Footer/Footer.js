import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='text-center my-3'>
            @ {date} All Rights Reserves
        </div>
    );
};

export default Footer;