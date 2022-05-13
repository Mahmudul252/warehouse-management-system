import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://gentle-depths-46092.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems];
}

export default useItems;