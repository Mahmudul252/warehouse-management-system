import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    const url = `http://localhost:5000/services`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems];
}

export default useItems;