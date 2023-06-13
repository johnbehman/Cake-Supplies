import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./OrderList.css";









export const OrderList = () => {
    const [Order, setOrder] = useState([]);
    const navigate = useNavigate();

    const localProjectUser = localStorage.getItem("project_user");
    const projectUserObject = JSON.parse(localProjectUser);
    console.log(projectUserObject.id);

    const [needRefresh, setNeedRefresh] = useState(false);




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



    const deleteButton = (ordersId) => {

        return (
            <button
                onClick={() => {
                    fetch(
                        `https://localhost:7005/api/Order/GetAllOrderByAdmin${ordersId}`,
                        {
                            method: "DELETE"
                        }
                    )
                        .then(setNeedRefresh(true));
                }}
                className="delete"
            >
                DELETE
            </button>
        );

    };

    return (
        <>
            <div className="orderMain">


                <div className="order_h1">
                    <h1> order List</h1>

                </div>
                <article className="order">

                    {Order.map((order) => {
                        return (
                            <section key={order.id} className="orderList">
                                {/* <p>{order.address} - {order.imageUrl} square feet</p> */}
                                <div>
                                    <div className="font-list">
                                        {/* < className="order" src={order.id} alt="wedding cake" /> */}
                                        <div>
                                            {/* <p>Name: {order.name} </p> */}
                                            <Link to={`/order/${order.id}`}>Name: {order.name} </Link>
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
                                        <div>
                                            <p>Quantity: {order.quantity}</p>
                                        </div>
                                        <div>
                                            <p>Image: {order.imageUrl}</p>
                                        </div>

                                        <div>
                                            <p>Name: {order.customerName}</p>
                                        </div>
                                        <div>
                                            <p>Category: {order.Category}</p>
                                        </div>






                                    </div>
                                </div>
                                {deleteButton(order.id)}
                                <div >
                                    <button className="create-bt" onClick={() => navigate("/order/create")}>Create order</button>
                                </div>
                                {/* <button
          onClick={(clickEvent) => {
            handleSaveButtonClick(clickEvent);
          }}
          className="editCake"
          >
          Edit
        </button> */}

                            </section>
                        );
                    })}
                </article>
            </div>
        </>
    );
};