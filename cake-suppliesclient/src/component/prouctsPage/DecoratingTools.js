import React from "react";
import { useEffect, useState } from "react"
import "./DecoratingTools.css";

export const DecoratingTools = () => {
    const [decoratingTools, setDecoratingTools] = useState([])

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`https://localhost:7005/api/Items/GetAllItemsByDecoratingTools`)
                const decoratingToolsArray = await response.json()
                setDecoratingTools(decoratingToolsArray)
            }
            fetchData()

        },
        []
    )





    return (
        <>
            <div className="decoratingTools-background">
                <div className="decorating_h1">
                    <h1>Decorating Tools</h1>
                </div>
                <article className="decorating" >
                    {
                        decoratingTools.map(
                            (decoratingTools) => {
                                return <section key={decoratingTools.id} >
                                    <div className="decoratinBox">
                                        <div>
                                            <img className="decoratingImage" src={decoratingTools.imageUrl} alt="DecoratingTools" />

                                        </div>
                                        <div className="ContainerDetails"> 
                                        <div className="stylingName">Name: {decoratingTools.name}</div>
                                        <div className="descriptionBox">Description: {decoratingTools.description}</div>
                                        <div>Category: {decoratingTools.category}</div>
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