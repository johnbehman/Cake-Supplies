import React from "react";
import { useEffect, useState, useParams } from "react"


export const ItemDetails = () => {
    const [details, setDetails] = useState()
    const { id } = useParams();


    const localProjectUser = localStorage.getItem("project_user");
    const projectUserObject = JSON.parse(localProjectUser);
    console.log(projectUserObject.id);



    useEffect(
        () => {
            const fetchData = async () => {
                const projectUserObject = JSON.parse(localProjectUser);
                const response = await fetch(`https://localhost:7005/api/Items/GetById/${projectUserObject.id}`)
                const singleItem = await response.json();
                console.log(singleItem);
                setDetails(singleItem);
            }
            fetchData();


        }, []
    );








    return (
        <>
            <div className="details-background">


                <div className="details_h1">

                    <h1>ditails</h1>

                </div>
                <article className="detail" >
                    {
                        details.map(
                            (detail) => {


                                return (<section className="colorInfo" key={detail.itemId} >




                                    <div>
                                        <img className="edible" src={detail.imageUrl} alt="AirBrushColors" />


                                        <div className="stylingName">{detail.name}</div>


                                        <div className="ContainerDetails">

                                            <div className="descriptionBox">Description: {detail.description}</div>
                                            <div>Category: {detail.category}</div>
                                        </div>
                                    </div>

                                </section>)
                            }
                        )
                    }
                </article> </div>

        </>
    )


};

{/* <div className="edible-background">

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
                    </section>                 */}


