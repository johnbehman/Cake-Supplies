import React from "react";
import { useEffect, useState } from "react"
import "./Coloring.css";
import { CustomerSearch } from "./CustomerSearch";

export const Coloring = () => {
    const [coloring, setColoring] = useState([])

    const localProjectUser = localStorage.getItem("project_user")
    const localUserObject = JSON.parse(localProjectUser)

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
    );





    return (
        <>
            <div className="coloring-background">
                <CustomerSearch />
                <div className="coloring_h1">

                    <h1>Coloring</h1>

                </div>
                <article className="colors" >
                    {
                        coloring.map(
                            (coloring) => {
                                return <section key={coloring.id} >
                                    {/* <p>{gallary.address} - {gallary.imageUrl} square feet</p> */}

                                    <div className="text">
                                        <img className="coloring" src={coloring.imageUrl} alt="AirBrushColors" />




                                        <div>Name: {coloring.name}</div>
                                        <div>Description: {coloring.description}</div>
                                        <div>Category: {coloring.category}</div>
                                    </div>

                                </section>
                            }
                        )
                    }
                </article> </div>
        </>
    );
};