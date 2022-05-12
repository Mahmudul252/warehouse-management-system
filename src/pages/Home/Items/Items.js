import React from 'react';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';

const Items = ({ all = true }) => {
    const [items] = useItems();
    let modifiedItems;
    if (all) {
        modifiedItems = items;
    }
    else {
        modifiedItems = items.slice(0, 6);;
    }
    return (
        <div className='row justify-content-center mx-auto'>
            <h2 className='text-center display-6 mb-3 mt-3'>Inventory</h2>
            {
                modifiedItems.map(item => <Item
                    key={item._id}
                    item={item}
                ></Item>)
            }
        </div>
    );
};

export default Items;