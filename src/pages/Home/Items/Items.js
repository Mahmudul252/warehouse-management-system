import React from 'react';
import { CardGroup } from 'react-bootstrap';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';

const Items = () => {
    const [items] = useItems();
    return (
        <div className='row justify-content-center'>
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