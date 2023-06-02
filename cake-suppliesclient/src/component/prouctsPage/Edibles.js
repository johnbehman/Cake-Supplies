
import React from "react";
import { useEffect, useState } from "react"
import "./Edibles.css";

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
                                return <section key={edibles.id} >
                                    {/* <p>{gallary.address} - {gallary.imageUrl} square feet</p> */}

                                    <div>
                                        <img className="edible" src={edibles.imageUrl} alt="Edibles" />

                                    </div>
                                </section>
                            }
                        )
                    }
                </article> </div>
        </>
    );
};