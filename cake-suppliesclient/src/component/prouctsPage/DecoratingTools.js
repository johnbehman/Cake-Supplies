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
                                    {/* <p>{gallary.address} - {gallary.imageUrl} square feet</p> */}
                                    <div className="decoratinBox">
                                        <div>
                                            <img className="decorating" src={decoratingTools.imageUrl} alt="DecoratingTools" />

                                        </div>

                                        <div>Name: {decoratingTools.name}</div>
                                        <div>Description: {decoratingTools.description}</div>
                                        <div>Category: {decoratingTools.category}</div>
                                    </div>
                                </section>
                            }
                        )
                    }
                </article> </div>
        </>
    );
};