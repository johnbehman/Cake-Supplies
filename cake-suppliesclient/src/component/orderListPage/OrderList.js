import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom"
import "./OrderList.css";
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';







export const OrderList = () => {
    const [Order, setOrder] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const localProjectUser = localStorage.getItem("project_user");
    const projectUserObject = JSON.parse(localProjectUser);
    console.log(projectUserObject.id);

    const [needRefresh, setNeedRefresh] = useState(false);

    const [itemOrder, setItemOrder] = useState({
        //id:0,
        orderId: 0,
        itemId: 0,
        quantity: 0
    });


    const handleSaveButtonClick = (e) => {
        e.preventDefault();


        fetch(`https://localhost:7005/api/OrderItems/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemOrder),
        })
            .then(() => {
                navigate("/order");
            });
    };


    useEffect(() => {//https://localhost:7005/api/Order/GetById/1

        const url = projectUserObject.isStaff ? `https://localhost:7005/api/Order/GetAllOrderByAdmin?` : `https://localhost:7005/api/Order/GetById/${projectUserObject.id}`

        const fetchData = async () => {
            const response = await fetch(url);
            const orderArray = await response.json();
            setOrder(orderArray);
            console.log(orderArray);
        };

        fetchData();
    }, [needRefresh]);

    const deleteButton = (orderId) => {

        return (


            <Button variant="danger"
                onClick={() => {
                    fetch(
                        `https://localhost:7005/api/OrderItems/DeleteOrderById/${orderId}`,


                        {
                            method: "DELETE"
                        }
                    )
                        .then(setNeedRefresh(true));
                }}
                className="delete"
            >
                <i className="fa fa-trash" aria-hidden="true"></i>
                 
            </Button>

        );

    };



    return (
        <>






            <div className="mainpage">


                <div className="order_h1">
                    <h1> Cart </h1>
                </div>

                <div className="orderMain">

                    <article className="orderListCustomer">

                        {Order.map((order) => {

                            return (

                                <section key={order.orderId} className="orderList">
                                    <div>
                                        <div className="font-list">
                                            <div>
                                                <Link to={`/order/${order.orderId}`}>Name: {order.customerName} </Link>
                                            </div>

                                            <div>
                                                <p>pickUpDate: {order.pickUpDate}</p>
                                            </div>
                                            <div>
                                                <p>Address: {order.address}</p>
                                            </div>

                                            <div>
                                                <p>phone: {order.phone}</p>
                                            </div>
                                            <div>
                                                <p>Email: {order.email}</p>
                                            </div>
                                            <div className="quantatiyLable">
                                                <p>Quantity: {order.quantity}</p>
                                            </div>
                                            <div >
                                                Image:   <img className="OrderImage" src={order.imageUrl} />
                                            </div>

                                            <div>
                                                <p>Name: {order.itemName}</p>
                                            </div>
                                            <div>
                                                <p>Category: {order.category}</p>
                                            </div>

                                        </div>
                                    </div>

                                    <form className="cakeForm">

                                        <fieldset>
                                            <div className="form-group">
                                                <label htmlFor="quantity">Quantity:</label>
                                                <select
                                                    value={order.quantity}
                                                    onChange={(evt) => {
                                                        const copy = order;
                                                        copy.quantity = parseInt(evt.target.value);
                                                        console.log("Copy: ", copy);

                                                        //setItemOrder(copy);
                                                    }}
                                                >
                                                    <option value={order.quantity}>{order.quantity}</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                </select>
                                            </div>
                                        </fieldset>


                                        <button
                                            onClick={(clickEvent) => {

                                                handleSaveButtonClick(clickEvent)
                                            }
                                            }

                                            className="btn btn-primary"
                                        >
                                            Edit
                                        </button>
                                    </form>

                                    <br />
                                    <div>
                                        {deleteButton(order.orderId)}
                                    </div>
                                </section>
                            );
                        })}
                    </article>
                </div>
            </div>
        </>
    );
};