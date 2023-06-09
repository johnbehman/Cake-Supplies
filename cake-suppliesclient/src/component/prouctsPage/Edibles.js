

import React from "react";
import { useEffect, useState } from "react"
import "./Coloring.css";
// import { AddOrder } from "../orderListPage/AddOrder";
import { useNavigate } from "react-router-dom";
import "./Edibles.css";
import Button from 'react-bootstrap/Button';



export const Edibles = () => {
    const [edibles, setEdibles] = useState([])
const navigate = useNavigate()


    const localProjectUser = localStorage.getItem("project_user")
    const localUserObject = JSON.parse(localProjectUser)

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`https://localhost:7005/api/Items/GetAllItemsByEdibles`)
                const ediblesArray = await response.json()
                setEdibles(ediblesArray)
            }
            fetchData()

        },
        []
    );

    const handleSaveButtonClick = async (edibles) => {
const response = await fetch (`https://localhost:7005/api/Order/GetById/${localUserObject.id}`)
const currentOrder = await response.json()
        const orderToSendAPI = {
            customerId: localUserObject.id,
            pickUpDate:  currentOrder[0].pickUpDate,                       
            orderItems: {
                itemId: edibles.id,
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
            <div className="edibles-background">
                <div className="edibles_h1">

                    <h1>Edibles</h1>

                </div>
                <article className="edibles" >
                    {
                        edibles.map(
                            (edible) => {


                                return <section className="colorInfo" key={edible.id} >


                                    <div className="text">
                                        <div>

                                            <img className="edible" src={edible.imageUrl} alt="AirBrushColors" />

                                            <Button variant="primary" onClick={() => {

                                                handleSaveButtonClick(edible)
                                            }
                                            }>
                                                <i className="fa fa-cart-plus" aria-hidden="true"></i>Add to Cart</Button>
                                        </div>


                                        <div className="ContainerDetails">
                                            <div className="stylingName">Name: {edible.name}</div>
                                            {/* <div className="descriptionBox">Description: {edible.description}</div> */}
                                            {/* <div>Category: {edible.category}</div> */}
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



// import { Link, useNavigate } from "react-router-dom";
// import React from "react";
// import { useEffect, useState } from "react"
// import "./Edibles.css";




// export const Edibles = () => {
//     const [edibles, setEdibles] = useState([])
//     const navigate = useNavigate()
//     useEffect(
//         () => {
//             const fetchData = async () => {
//                 const response = await fetch('https://localhost:7005/api/Items/GetAllItemsByEdibles')
//                 const ediblesArray = await response.json()
//                 setEdibles(ediblesArray)
//             }
//             fetchData()


//         },
//         []
//     )


//     return (
//         <>
//             <div className="edible-background">
//                 <div className="edibles_h1">
//                     <h1>Edibles</h1>
//                 </div>
//                 <article className="edibles" >
//                     {
//                         edibles.map(
//                             (edibles) => {
//                                 return <section key={edibles.Name} >


//                                     <div>
                                        
//                                             <img className="edible" onClick={() => navigate(`itemDetails/${edibles.id}`)} src={edibles.imageUrl} alt="Edibles" />
                                      
//                                     </div>
//                                     <div className="ContainerDetails">
//                                         <div className="stylingName">Name: {edibles.name}</div>
//                                         {/* <div className="descriptionBox">Description: {edibles.description}</div>
//                                         <div>Category: {edibles.category}</div> */}
//                                     </div>
//                                 </section>
//                             }
//                         )
//                     }
//                 </article> </div>
//         </>
//     );
// };