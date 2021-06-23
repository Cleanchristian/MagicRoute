import React, {useState, useEffect} from 'react'
import './App.css';
import {Link} from 'react-router-dom'


function Item({match}) {

    useEffect(() => {
        fetchItem();
        console.log(match)
    },[]);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://api.magicthegathering.io/v1/sets/${match.params.code}`)
        const item = await fetchItem.json()
        setItem(item.set);

        console.log(item)
    }

  return (
    <div>
      <h1>{item.name}</h1>
      <h3>Release date: {item.releaseDate}</h3>
    </div>
  );
}

export default Item;

