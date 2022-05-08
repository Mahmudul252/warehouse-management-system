import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { _id, itemName, img, description, quantity, price, supplier } = item;
    return (
        <div class="card col-sm-12 col-lg-4 card-width">
            <img src={img} class="card-img-top rounded-3 mt-2 item-img" alt="..." />
            <div class="card-body">
                <h4 class="card-title">{itemName}</h4>
                <p class="card-text">{description}</p>
                <h5>Quantity: {quantity}</h5>
                <h5>Price: ${price}</h5>
                <h6>Supllier: {supplier}</h6>
            </div>
            <div class="card-footer border-0 bg-white">
                <button className="btn btn-secondary w-100">Update</button>
            </div>
        </div>

    );
};

export default Item;