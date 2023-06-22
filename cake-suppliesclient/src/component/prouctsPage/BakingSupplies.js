import "./BakingSupplies.css";


import React from "react";
import { useEffect, useState } from "react"
import { AddOrder } from "../orderListPage/AddOrder";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';



export const BakingSupplies = () => {
    const [bakingSupplies, setBakingSupplies] = useState([])
    const navigate = useNavigate()


    const localProjectUser = localStorage.getItem("project_user")
    const localUserObject = JSON.parse(localProjectUser)

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
    );

    const handleSaveButtonClick = async (bakingSupplies) => {
        const response = await fetch(`https://localhost:7005/api/Order/GetById/${localUserObject.id}`)
        const currentOrder = await response.json()
        const orderToSendAPI = {
            customerId: localUserObject.id,
            pickUpDate: currentOrder[0].pickUpDate,
            orderItems: {
                itemId: bakingSupplies.id,
                quantity: 1,
            }
        };





        return fetch(`https://localhost:7005/AddOrder`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderToSendAPI),
        })
            .then((response) => response.json())
            .then(() => {
                navigate("/order");
            });
    };





    return (
        <>
            <div className="bakingSupplies-background">
                <div className="bakingSupplies_h1">
                    <h1>Baking Supplies</h1>
                </div>
                <article className="baking" >
                    {
                        bakingSupplies.map(
                            (bakingSupplies) => {
                                return <section key={bakingSupplies.id} >


                                    <div className="text">
                                        <div>

                                            <img className="baking-sppl" src={bakingSupplies.imageUrl} alt="AirBrushColors" />

                                            <Button variant="primary" onClick={() => {

                                                handleSaveButtonClick(bakingSupplies)
                                            }
                                            }><i class="fa fa-cart-plus" aria-hidden="true"></i>
                                                Add to Cart</Button>
                                        </div>


                                        <div className="ContainerDetails">
                                            <div className="stylingName">Name: {bakingSupplies.name}</div>
                                            <div className="descriptionBox">Description: {bakingSupplies.description}</div>
                                            <div>Category: {bakingSupplies.category}</div>
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


// import React from "react";
// import { useEffect, useState } from "react"
// import "./BakingSupplies.css";

// export const BakingSupplies = () => {
//     const [bakingSupplies, setBakingSupplies] = useState([])

//     useEffect(
//         () => {
//             const fetchData = async () => {
//                 const response = await fetch('https://localhost:7005/api/Items/GetAllItemsByBakingSupplies')
//                 const bakingSuppliesArray = await response.json()
//                 setBakingSupplies(bakingSuppliesArray)
//             }
//             fetchData()

//         },
//         []
//     )


//     return (
//         <>
//             <div className="bakingSupplies-background">
//                 <div className="bakingSupplies_h1">
//                     <h1>Baking Supplies</h1>
//                 </div>
//                 <article className="baking" >
//                     {
//                         bakingSupplies.map(
//                             (bakingSupplies) => {
//                                 return <section key={bakingSupplies.id} >
//                                     {/* <p>{gallary.address} - {gallary.imageUrl} square feet</p> */}

//                                     <div>
//                                         <img className="baking-sppl" src={bakingSupplies.imageUrl} alt="Supplies" />

//                                     </div>
//                                     <div className="ContainerDetails">
//                                     <div className="stylingName">Name: {bakingSupplies.name}</div>
//                                     <div className="descriptionBox">Description: {bakingSupplies.description}</div>
//                                     <div>Category: {bakingSupplies.category}</div>
//                                     </div>
//                                 </section>
//                             }
//                         )
//                     }
//                 </article> </div>
//         </>
//     );
// };