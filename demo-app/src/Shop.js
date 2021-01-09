import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Shop = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();   
    },[])

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items.data);
        setItems(items.data);
    }

    return (
        <div>
            {items.map(item => (
                <h2 key={item.itemId}>
                    <Link to={`/Shop/${item.itemId}`}>{item.item.name}</Link>
                </h2>
            ))}
        </div>
    )
}

export default Shop;
