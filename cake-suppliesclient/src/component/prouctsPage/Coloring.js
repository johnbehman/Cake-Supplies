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
                <div className="coloring_h1">

                    <h1>Coloring</h1>

                </div>
                <article className="colors" >
                    {
                        coloring.map(
                            (coloring) => {





                                return <section className="colorInfo"key={coloring.id} >
                          

                                    <div className="text">
                                    <div>
                                        <img className="coloring" src={coloring.imageUrl} alt="AirBrushColors" />
                                        </div>

                                     <div className="ContainerDetails">    
                                      <div className="stylingName">Name: {coloring.name}</div>
                                        <div className="descriptionBox">Description: {coloring.description}</div>
                                        <div>Category: {coloring.category}</div>
                                        </div>
           
                                    </div>

                                </section>
                            }
                        )
                    }
                </article> </div>

                
        </>
    );
};