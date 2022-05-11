import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddNewInventory = () => {
    const handleAddButton = event => {
        event.preventDefault();
        const itemName = event.target.itemName.value;
        const supplier = event.target.supplier.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const img = event.target.img.value;
        const description = event.target.description.value;

        const item = { itemName, supplier, quantity, price, img, description };

        fetch('http://localhost:5000/services', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                toast('Item added successfully!');
                event.target.reset();
            });

    }
    return (
        <div className='mt-3 w-50 mx-auto'>
            <h2 className='display-6 my-3 text-center'>Add New Inventory</h2>
            <Form onSubmit={handleAddButton}>
                {/* itemName */}
                <FloatingLabel controlId="floatingInput" label="Item Name" className="mb-3">
                    <Form.Control name="itemName" type="text" placeholder="Enter Item Name" required />
                </FloatingLabel>

                {/* Supplier Name */}
                <FloatingLabel controlId="floatingInput" label="Supplier" className="mb-3">
                    <Form.Control name="supplier" type="text" placeholder="Enter Supplier Name" required />
                </FloatingLabel>

                {/* Quantity */}
                <FloatingLabel controlId="floatingInput" label="Quantity" className="mb-3">
                    <Form.Control name="quantity" type="number" placeholder="Enter Quantity" required />
                </FloatingLabel>

                {/* price */}
                <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
                    <Form.Control name="price" type="number" placeholder="Enter Price" required />
                </FloatingLabel>

                {/* image */}
                <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
                    <Form.Control name="img" type="text" placeholder="Enter Image URL" required />
                </FloatingLabel>

                {/* image */}
                <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
                    <Form.Control name="description" as="textarea" rows={3} placeholder="Enter Item Description" required />
                </FloatingLabel>

                <Button className='w-25 d-block mx-auto' variant="secondary" type="submit">
                    Add Item
                </Button>
            </Form>
        </div>
    );
};

export default AddNewInventory;