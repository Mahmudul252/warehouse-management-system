import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useItems from '../../hooks/useItems';
import MyItem from '../MyItem/MyItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UserVerification from '../Login/UserVerification/UserVerification';
import PageTitle from '../shared/PageTitle/PageTitle';

const MyItems = () => {
    const [items] = useItems();
    const [user] = useAuthState(auth);
    const [userStoredItems, setUserStoredItems] = useState([]);
    const [myStoredItems, setMyStoredItems] = useState([]);
    UserVerification(user);
    useEffect(() => {
        const userItems = items?.filter(item => item.supplier === (user?.email).split("@")[0]);
        setUserStoredItems(userItems)
    }, [items, user?.email]);

    const handleDeleteButton = _id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://gentle-depths-46092.herokuapp.com/services/${_id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myStoredItems.filter(item => item._id !== _id);
                        setMyStoredItems(remaining);

                        const userRemainingItems = userStoredItems?.filter(userStoredItem => userStoredItem._id !== _id);
                        setUserStoredItems(userRemainingItems);
                        toast('Item Deleted!');
                    }
                });
        }
    }
    return (
        <div>
            <PageTitle title="My Items"></PageTitle>
            <div className='row justify-content-center mx-auto'>
                <h2 className='text-center display-6 mb-3 mt-3'>My Items</h2>
                {
                    userStoredItems.map(userItem =>
                        <MyItem
                            key={Math.random()}
                            userItem={userItem}
                            handleDeleteButton={handleDeleteButton}
                        ></MyItem>
                    )
                }
            </div>
        </div>
    );
};

export default MyItems;