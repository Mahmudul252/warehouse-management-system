import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const Update = () => {
    const { _id } = useParams();
    const [item, setItem] = useState({});
    const { itemName, img, description, price, quantity, supplier } = item;
    console.log(item)
    useEffect(() => {
        const url = `http://localhost:5000/services/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            <h2>Update Info for: {itemName}</h2>
            {

            }
        </div>
    );
};

export default Update;