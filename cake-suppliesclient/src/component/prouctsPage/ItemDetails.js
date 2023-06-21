import React from "react";
import { useEffect, useState, useParams } from "react"



export const ItemDetails = () => {
    const [details, setDetails] = useState()
    const { itemId } = useParams()






    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`https://localhost:7005/api/Items/GetById/${itemId}`)
                const singleItem = await response.json();
                setDetails(singleItem);
            }
            fetchData();


        }, [itemId]
    );








    return (
        <>
            <div className="edible-background">

                <h1>item details</h1>
            </div>

            <section
                key={`detail--${details.Id}`}>

                        <div>
                            <img className="edible" src={details.imageUrl} alt="Edibles" />

                        </div>
                        <div className="ContainerDetails">
                            <div className="stylingName">Name: {details.name}</div>
                            <div className="descriptionBox">Description: {details.description}</div>
                            <div>Category: {details.category}</div>
                        </div>
                    </section>

                
        </>
    );
};