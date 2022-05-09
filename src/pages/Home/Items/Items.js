import React from 'react';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';

const Items = () => {
    const [items] = useItems();
    return (
        <div className='row justify-content-center'>
            <h2 className='text-center'>Inventory</h2>
            {
                items.map(item => <Item
                    key={item._id}
                    item={item}
                ></Item>)
            }
        </div>
    );
};

export default Items;