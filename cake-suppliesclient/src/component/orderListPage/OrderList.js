import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom"
import "./OrderList.css";









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
    // =========================================
    //useEffect(() => {
    //     fetch(
    //         `https://localhost:7005/api/OrderItems/${id}`


    //         )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             setItemOrder(data);
    //         });
    // }, []);

    const handleSaveButtonClick = (e) => {
        e.preventDefault();


        //Edit
        // https://localhost:7005/api/OrderItems/1
        //https://localhost:7005/api/OrderItems/68

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



    // =========================================



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

    //https://localhost:7005/api/OrderItems/DeleteOrderById/36


    const deleteButton = (orderId) => {

        return (
            <button
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
                DELETE
            </button>
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
                                    {/* <p>{order.address} - {order.imageUrl} square feet</p> */}
                                    <div>
                                        <div className="font-list">
                                            {/* < className="order" src={order.id} alt="wedding cake" /> */}
                                            <div>
                                                {/* <p>Name: {order.name} </p> */}
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
                                            <div>
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



                                    {/* <div >
                                    <button className="create-bt" onClick={() => navigate(`/order/${Order.id}`)}>Create order</button>
                                </div> */}
                                    {/* <button
          onClick={(clickEvent) => {
              handleSaveButtonClick(clickEvent);
            }}
            className="editCake"
            >
            Edit
        </button> */}

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
                                                    <option value="0"></option>
                                                    <option value="1" >1</option>
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