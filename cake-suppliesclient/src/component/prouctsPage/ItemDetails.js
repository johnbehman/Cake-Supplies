import React from "react";
import { useEffect, useState, useParams  } from "react"
import { Coloring } from "./Coloring";
import { DecoratingTools } from "./DecoratingTools";
import { Edibles } from "./Edibles";
import { BakingSupplies } from "./BakingSupplies";



export const ItemDetails = () => {
    // const [details, setDetails] = useState([])
  
    
    
    // const localProjectUser = localStorage.getItem("project_user");
    // const projectUserObject = JSON.parse(localProjectUser);
    // console.log(projectUserObject.id);
    
    // // useEffect( () => {
    //     //         const fetchData = async () => {
    //         //             const response = await fetch('https://localhost:7005/api/Items/GetById/${EditOrderId}')
            
    //         //             const descriptionArray = await response.json()
    //         //             setDetails(descriptionArray)
    //         //             console.log(descriptionArray);
    //         //         }
    //         //         fetchData()
            
    //         //     },
    //         //     []    
    //         //     )
            
    //         useEffect(
    //             () => {
    //                 const fetchData = async () => {
    //                     const response = await fetch('https://localhost:7005/api/Items/GetById/${ordersId}')
    //             const DetailsArray = await response.json()
    //             details(DetailsArray)
    //         }
    //         fetchData()
            
            
    //     },
    //     []
    //     )
        



    



    return (
        <>


        <Coloring/>

<DecoratingTools/>

<Edibles/>

<BakingSupplies/>

            {/* <div className="edible-background">
                <div className="edibles_h1">
                    <h1>Product Details </h1>
                </div>
                <article className="edibles" >
                    {
                        details.map(
                            (detail) => {
                                return <section key={detail.orderId} >


{/* <section key={order.orderId} className="orderList"> */}

                                  
                                    {/* <div>
                                        <img className="edible" src={detail.imageUrl} alt="Edibles" />

                                    </div>
                                    <div className="ContainerDetails">    
                                      <div className="stylingName">Name: {detail.name}</div>
                                        <div className="descriptionBox">Description: {detail.description}</div>
                                        <div>Category: {detail.category}</div>
                                        </div>
                                </section>
                            }
                        )
                    }
                </article> </div> */} */
        </>
    );
};