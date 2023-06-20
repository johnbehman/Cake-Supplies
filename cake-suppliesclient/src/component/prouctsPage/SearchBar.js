import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";



export const SearchBar = () => {

  const [searchInput, setSearchInput] = useState("");
  const [items, setItems] = useState([]);


  useEffect(() => {
    if (searchInput) {
      fetch(
        `https://localhost:7005/api/Items/SearchItemsByName?Name=${searchInput}`
  
  
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setItems(data);
        });
        
    }
    else
    {
      setItems([])
    }
  }, [searchInput]);


  const handleChange = (e) => {
    e.preventDefault();


    setSearchInput(e.target.value);
  };

  return (

    <div>

      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} />

        <div className="edible-background">
         
          <article className="edibles" >
           {
             items.length === 0 ? "" :

              items.map(
                (item) => {
                  return <section key={item.orderId} >
                    <div>
                      <Link to={`/itemDetails/${item.orderId}`}>Name: {item.Name} </Link>
                    </div>

                    <div>
                      <img className="edible" src={item.imageUrl} alt="item" />

                    </div>
                    <div className="ContainerDetails">
                      <div className="stylingName">Name: {item.name}</div>
                      <div className="descriptionBox">Description: {item.description}</div>
                      <div>Category: {item.category}</div>
                    </div>
                  </section>
                }
              )
            }
          </article> </div>
      
    </div>
  );



};

