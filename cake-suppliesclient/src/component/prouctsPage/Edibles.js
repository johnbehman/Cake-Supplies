import { Link } from "react-router-dom";

import React from "react";
import { useEffect, useState } from "react"
import "./Edibles.css";
import { ItemDetails } from "./ItemDetails";

export const Edibles = () => {
    const [edibles, setEdibles] = useState([])

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch('https://localhost:7005/api/Items/GetAllItemsByEdibles')
                const ediblesArray = await response.json()
                setEdibles(ediblesArray)
            }
            fetchData()


        },
        []
    )





    return (
        <>
            <div className="edible-background">
                <div className="edibles_h1">
                    <h1>Edibles</h1>
                </div>
                <article className="edibles" >
                    {
                        edibles.map(
                            (edibles) => {
                                return <section key={edibles.orderId} >
                                    <div>
                                        <Link to={`/itemDetails/${edibles.orderId}`}>Name: {edibles.Name} </Link>
                                    </div>

                                    <div>
                                        <img className="edible" src={edibles.imageUrl} alt="Edibles" />

                                    </div>
                                    <div className="ContainerDetails">
                                        <div className="stylingName">Name: {edibles.name}</div>
                                        <div className="descriptionBox">Description: {edibles.description}</div>
                                        <div>Category: {edibles.category}</div>
                                    </div>
                                </section>
                            }
                        )
                    }
                </article> </div>
        </>
    );
};