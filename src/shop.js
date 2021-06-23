import React, {useState, useEffect} from 'react'
import './App.css';
import {Link} from 'react-router-dom'


function Shop() {

    useEffect(() => {
        fetchItems()
    },[]);

    const [items, setItems] = useState([]);


    const fetchItems = async () => {
        const data = await fetch('https://api.magicthegathering.io/v1/sets');
        
        const items = await data.json();
        console.log(items);
        setItems(items.sets);
    }
  return (
    <div>
      {items.map(item => (
        <h1 key={item.code} >
            <Link to={`/shop/${item.code}`} >{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;

