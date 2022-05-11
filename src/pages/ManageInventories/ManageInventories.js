import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, []);

    const handleDeleteButton = _id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/services/${_id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = allItems.filter(item => item._id !== _id);
                        setAllItems(remaining);
                        toast('Item Deleted!')
                    }
                });
        }
        // console.log('clicked', _id)
    }

    return (
        <div className='row justify-content-center mx-auto'>
            <h2 className='text-center display-6 mb-3 mt-3'>Manage Inventories</h2>
            {
                allItems.map(item => <ManageInventory
                    key={item._id}
                    item={item}
                    handleDeleteButton={handleDeleteButton}
                ></ManageInventory>)
            }
        </div>
    );
};

export default ManageInventories;