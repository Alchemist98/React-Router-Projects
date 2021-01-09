import React, { useEffect, useState } from 'react';

const ItemDetail = ({ match }) => {

    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState({});


    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await fetchItem.json();

        setItem(item);

        console.log(item)
    }

    


    return (
        <div>
            <h1>{item.data.item.name}</h1>
            <hr />
            <h1>Ratings</h1>
            <hr/>
            <h2>Average Stars: {item.data.item.ratings.avgStars}</h2>
            <h2>Number of Votes: {item.data.item.ratings.numberVotes}</h2>
            <h2>Total Points: {item.data.item.ratings.totalPoints}</h2>
        </div>
    )
}

export default ItemDetail;


