import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const AddOrder = () => {


    const navigate = useNavigate()
    // const {ordersId} = useParams()

    const localProjectUser = localStorage.getItem("project_user");
    const projectUserObject = JSON.parse(localProjectUser);
    console.log(projectUserObject);
    const Id = projectUserObject.id


    const [order, setOrder] = useState({
        customerId: Id,
        picUpDate: "",
        name: "",
        address: "",
        phone: "",
        email: "",
        orderItems: [
            {

                itemId: 0,
                quantity: 0,


            }
        ]
    })


    const sendNewOrder = async (SendToAPI) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `https://localhost:7005/AddOrder`,
            fetchOptions
        );
        navigate("/orderList");
        const responseJson = await response.json();
        return responseJson;
    };
    /* ------------------------------ */
    const handleSubmit = (event) => {
        event.preventDefault();
        sendNewOrder(order);
    };

    // const handleSaveButtonClick = (e) => {
    //     e.preventDefault();

    //     const orderToSendAPI = {
    //         customerId: projectUserObject.id,
    //         pickUpDate: order.pickUpDate,
    //         name: order.name,
    //         address: order.address,
    //         phone: order.phone,
    //         email: order.email,
    //         quantity: order.quantity
    //     };



    // return fetch(`https://localhost:7005/api/Order/GetAllOrderByAdmin`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(orderToSendAPI),
    // })
    //     .then((response) => response.json())
    //     .then(() => {
    //         navigate("/order");
    //     });







    // {order.name}
    return (
        <form className="cakeForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required
                        autoFocus
                        type="text"
                        // className="form-control"

                        // value={order.name}
                        // value="monkey"
                        onChange={(evt) => {
                            const copy = { ...order };
                            copy.name = evt.target.value;
                            setOrder(copy);
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        // value={order.address}
                        onChange={(evt) => {
                            const copy = { ...order };
                            copy.address = evt.target.value;
                            setOrder(copy);
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        // value={order.phone}
                        onChange={(evt) => {
                            const copy = { ...order };
                            copy.phone = evt.target.value;
                            setOrder(copy);
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        // value={order.email}
                        onChange={(evt) => {
                            const copy = { ...order };
                            copy.email = evt.target.value;
                            setOrder(copy);
                        }}
                    />
                </div>
            </fieldset>







            <fieldset>
                <div className="form-group">
                    <label htmlFor="cakeFlavor">quantity:</label>
                    <select
                        // value={order.cakeFlavorsId}
                        onChange={(evt) => {
                            const copy = { ...order };
                            copy.quantity = parseInt(evt.target.value);

                            setOrder(copy);
                        }}
                    >
                        <option value="0"></option>
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
                onClick={(clickEvent) => handleSubmit(clickEvent)}
                className="btn btn-primary"
            >
                Submit order
            </button>
        </form>
    );
};