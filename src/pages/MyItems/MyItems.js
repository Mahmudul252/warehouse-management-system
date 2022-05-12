import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useItems from '../../hooks/useItems';
import MyItem from '../MyItem/MyItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UserVerification from '../Login/UserVerification/UserVerification';

const MyItems = () => {
    const [items] = useItems();
    const [user] = useAuthState(auth);
    const [myStoredItems, setMyStoredItems] = useState([]);
    UserVerification(user);

    const userStoredItems = JSON.parse(localStorage.getItem(user.email));
    let userItems = [];
    userStoredItems?.map(userStoredItem => {
        const userItem = items.find(item => item.customID === userStoredItem.customID);
        userItems = [...userItems, userItem];
    });
    console.log(userItems);

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
                        const remaining = myStoredItems.filter(item => item._id !== _id);
                        setMyStoredItems(remaining);
                        toast('Item Deleted!');
                    }
                });
        }
    }
    return (
        <div>
            <div className='row justify-content-center mx-auto'>
                <h2 className='text-center display-6 mb-3 mt-3'>My Items</h2>
                {
                    myStoredItems.map(item => <MyItem
                        key={item._id}
                        item={item}
                        handleDeleteButton={handleDeleteButton}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;