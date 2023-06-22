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
                console.log(singleItem);
                setDetails(singleItem);
            }
            fetchData();


        }, []
    );








    return (
        <>
            <div className="edible-background">

                <h1>item details</h1>
            </div>

            <section
                >

                        <div>
                            <img className="edible" src={details.imageUrl} alt="Edibles" />
                        </div>
                        <div className="ContainerDetails">
                            <div className="stylingName">Name: {details.name}</div>
                            <div className="descriptionBox">Description: {details.description}</div>
                            <div className="categoryBox">Category: {details.category}</div>
                        </div>
                    </section>                
        </>
    );
};