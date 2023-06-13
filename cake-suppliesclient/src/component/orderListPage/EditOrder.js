import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditOrder = () => {

    const [itemOrder, setItemOrder] = useState({
        customerId: 0,
        pickUpDate: "",
        name: "",
        address: "",
        phone: "",
        email: "",

        orderItemsId: 0,
        itemsId: 0,

    });

    const { customerId } = useParams();
    const navigate = useNavigate();


    const localProjectUser = localStorage.getItem("project_user");
    const projectUserObject = JSON.parse(localProjectUser);

    // Display

    useEffect(() => {
        console.log(projectUserObject.id);
        fetch(
            `https://localhost:7005/api/Order/id=${customerId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setItemOrder(data[0]);
            });
    }, []);

    const handleSaveButtonClick = (e) => {
        e.preventDefault();



        // Edit

        return fetch(`https://localhost:7005/api/Order${itemOrder.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemOrder),
        })
            .then((response) => response.json())
            .then(() => {
                navigate("/order");
            });
    };
    // {itemOrder.name}
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

                        value={itemOrder.name}
                        onChange={(evt) => {
                            const copy = { ...itemOrder };
                            copy.name = evt.target.value;
                            setItemOrder(copy);
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        value={itemOrder.address}
                        onChange={(evt) => {
                            const copy = { ...itemOrder };
                            copy.address = evt.target.value;
                            setItemOrder(copy);
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        value={itemOrder.phone}
                        onChange={(evt) => {
                            const copy = { ...itemOrder };
                            copy.phone = evt.target.value;
                            setItemOrder(copy);
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        value={itemOrder.email}
                        onChange={(evt) => {
                            const copy = { ...itemOrder };
                            copy.email = evt.target.value;
                            setItemOrder(copy);
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="cakeFlavor">quantity:</label>
                    <select
                        value={itemOrder.itemsId}
                        onChange={(evt) => {
                            const copy = { ...itemOrder };
                            copy.itemsId = parseInt(evt.target.value);

                            setItemOrder(copy);
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
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary"
            >
                Submit  orders
            </button>
        </form>
    );
};