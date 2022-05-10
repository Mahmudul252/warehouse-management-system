import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [updatedItem, setUpdatedItem] = useState({});
    const { itemName, img, description, price, quantity, supplier, _id } = item;
    const url = `http://localhost:5000/services/${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [updatedItem])

    const newQuantity = quantity - 1;
    const handleDeliveredButton = () => {
        const quantity = newQuantity;
        const newItem = { itemName, img, description, price, quantity, supplier };
        setUpdatedItem(newItem);

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                toast('Item updated successfully!');
            })
    }

    const handleRestockButton = event => {
        event.preventDefault();
        const restockItem = event.target.quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(restockItem);
        if (1) {
            const quantity = newQuantity;
            const newItem = { itemName, img, description, price, quantity, supplier };
            setUpdatedItem(newItem);
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newItem)
            })
                .then(res => res.json())
                .then(data => {
                    toast('Item restocked successfully!');
                })
        }
        event.target.reset();
    }

    return (
        <div className='container my-3'>
            <h2>Update Info for: {itemName}</h2>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center border gap-4 rounded-3 p-4 ">
                <div>
                    <img src={img} alt="" className='rounded-3 img-fluid' />
                </div>
                <div style={{ width: '40%' }}>
                    <h4>Name: {itemName}</h4>
                    <b><small>Product ID: {_id}</small></b>
                    <p>{description}</p>
                    <h6>Quantity: {quantity}</h6>
                    <h6>Price: ${price}</h6>
                    <h6>Supplier: {supplier}</h6>
                    <button onClick={handleDeliveredButton} className="btn btn-secondary w-25">Delivered</button>
                </div>
                <div>
                    <Form onSubmit={handleRestockButton}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='fw-bold'>Restock Item</Form.Label>
                            <Form.Control type="number" name="quantity" placeholder="Enter restock quantity" />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Restock Now
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Update;