import React from "react";
import { useEffect, useState } from "react"
import "./Coloring.css";

export const Coloring = () => {
    const [coloring, setColoring] = useState([])

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`https://localhost:7005/api/Items/GetAllItemsByColoring`)
                const coloringArray = await response.json()
                setColoring(coloringArray)
            }
            fetchData()

        },
        []
    )





    return (
        <>
            <div className="coloring-background">
                <div className="coloring_h1">
                    <h1>Coloring</h1>
                </div>
                <article className="colors" >
                    {
                        coloring.map(
                            (coloring) => {
                                return <section key={coloring.id} >
                                    {/* <p>{gallary.address} - {gallary.imageUrl} square feet</p> */}

                                    <div>
                                        <img className="coloring" src={coloring.imageUrl} alt="AirBrushColors" />

                                    </div>
                                </section>
                            }
                        )
                    }
                </article> </div>
        </>
    );
};