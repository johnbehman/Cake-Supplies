import React from "react";
import { useEffect, useState } from "react"
import "./BakingSupplies.css";

export const BakingSupplies = () => {
    const [bakingSupplies, setBakingSupplies] = useState([])

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch('https://localhost:7005/api/Items/GetAllItemsByBakingSupplies')
                const bakingSuppliesArray = await response.json()
                setBakingSupplies(bakingSuppliesArray)
            }
            fetchData()

        },
        []
    )





    return (
        <>
            <div className="bakingSupplies-background">
                <div className="bakingSupplies_h1">
                    <h1>Our Gallary</h1>
                </div>
                <article className="baking" >
                    {
                        bakingSupplies.map(
                            (bakingSupplies) => {
                                return <section key={bakingSupplies.id} >
                                    {/* <p>{gallary.address} - {gallary.imageUrl} square feet</p> */}

                                    <div>
                                        <img className="baking-sppl" src={bakingSupplies.imageUrl} alt="Supplies" />

                                    </div>
                                </section>
                            }
                        )
                    }
                </article> </div>
        </>
    );
};