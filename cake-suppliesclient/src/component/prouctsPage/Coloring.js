import React from "react";
import { useEffect, useState } from "react"
import "./Coloring.css";
import { Link, useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import logo from "../images/logo.png";




export const Coloring = () => {
    const [coloring, setColoring] = useState([])
    const navigate = useNavigate()


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

    const handleSaveButtonClick = async (coloring) => {
        const response = await fetch(`https://localhost:7005/api/Order/GetById/${localUserObject.id}`)
        const currentOrder = await response.json()
        const orderToSendAPI = {
            customerId: localUserObject.id,
            pickUpDate: currentOrder[0].pickUpDate,
            orderItems: {
                itemId: coloring.id,
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


            <div className="coloring-background">

                {/* <div>
                    <div className="mainLogo">
                        <img className="LoginImage" src={logo} alt="logo" />

                        <div className="prjectHeder">
                            <h1>Nashville Cake-Supplies</h1>
                        </div>
                    </div>
                </div> */}
                <div className="coloring_h1">

                    <h1>Coloring</h1>

                </div>
                <article className="colors" >
                    {
                        coloring.map(
                            (coloring) => {


                                return <section className="colorInfo" key={coloring.id} >


                                    <div className="text">

                                        <div>
                                            <Link to={`/itemDetails/${coloring.id}`}> <img className="coloring" src={coloring.imageUrl} alt="AirBrushColors" /></Link>


                                            {/* <img className="coloring" src={coloring.imageUrl} alt="AirBrushColors" /> */}

                                            <Button variant="primary" onClick={() => {

                                                handleSaveButtonClick(coloring)
                                            }
                                            }><i class="fa fa-cart-plus" aria-hidden="true"></i>

                                                Add to Cart</Button>
                                        </div>


                                        <div className="ContainerDetails">
                                            <div className="stylingName">Name: {coloring.name}</div>
                                            {/* <div className="descriptionBox">Description: {coloring.description}</div> */}
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