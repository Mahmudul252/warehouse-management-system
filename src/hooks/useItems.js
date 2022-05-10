import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    const url = `http://localhost:5000/services`;
    useEffect(() => {
        const apiCall = async () => {
            try {
                let response = await fetch(url);
                let data = await response.json();
                setItems(data);
            } catch (error) {
                console.error(error)
            }
        }
        apiCall();

    }, [])

    // useEffect(() => {
    //     fetch('fakeData.json')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [])
    return [items, setItems];
}

export default useItems;