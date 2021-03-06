import React from 'react';

const ManageInventory = ({ item, handleDeleteButton }) => {
    const { _id, itemName, quantity, supplier, price } = item;

    return (
        <tr className='text-center'>
            <td style={{ width: '18%' }}>{_id}</td>
            <td style={{ width: '10%' }}>{itemName}</td>
            <td style={{ width: '10%' }}>{quantity}</td>
            <td style={{ width: '10%' }}>{price}</td>
            <td style={{ width: '20%' }}>{supplier}</td>
            <td style={{ width: '7%' }}><button onClick={() => handleDeleteButton(_id)} className='btn btn-secondary'>Delete</button></td>
        </tr>
    );
};

export default ManageInventory;