import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { SearchItems } from "../homePage/SearchItems";


export const CustomerSearch = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    const localProjectUser = localStorage.getItem("project_user");
    const projectUserObject = JSON.parse(localProjectUser);


    useEffect(() => {
        fetch(`https://localhost:7005/api/Items/SearchItemsByName?Name=${projectUserObject.name}`)


            .then((response) => response.json())
            .then((itemArray) => {
                setItems(itemArray);
                console.log(itemArray)
            });
    }, []);


    const fetchSearchByItems = (e) => {
        fetch(`https://localhost:7005/api/Items/SearchItemsByName?Name=${e}`)
            .then((response) => response.json())
            .then((itemsArray) => {
                setItems(itemsArray);
                console.log(itemsArray)
            });
    }







    return (
        <article className="UserBooksPageContainer">
            <SearchItems searchClicked={e => fetchSearchByItems(e)} />

            {items.map((item) => {
                return (
                    <section className="UserBooksContainer">

                        <img src={item.imageUrl} />
                        <div>Name: {item.name}</div>

                        <div>Category : ${item.category}</div>



                        <div>Description : ${item.description}</div>

                        {/* <div className="AdminUserBooksEditButtonContainer" onClick={() => navigate(`/searchItems/${items.id}`)}>
                        <div className="AdminUserBooksEditButton">Edit</div>
                    </div> */}

                    </section>

                );
            })}
        </article>
    );
}