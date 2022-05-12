import { useState } from 'react';

let myItems = [];
let available;
const useMyItems = () => {
    const [item, setItem] = useState({});
    if (item.itemName) {
        available = myItems.find(singleItem => singleItem.customID === item.customID);
        if (!available) {
            myItems = [...myItems, item];
            localStorage.setItem(item.userEmail, JSON.stringify(myItems));
        }
    }
    return [item, setItem];
};

export default useMyItems;