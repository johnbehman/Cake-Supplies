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


    const [order, update] = useState({
        
        customerId: Id,
        pickUpDate: new Date(),
        orderItems: {
            //orderId: 0,
            itemId: 0,
            quantity: 0
        }
    });

    const handleSaveButtonClick = (e) => {
        e.preventDefault();

        const orderToSendAPI = {
            customerId: projectUserObject.id,
            pickUpDate: order.pickUpDate,
            orderItems: {
            itemId: order.orderItems.itemId,
            quantity: order.orderItems.quantity,
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
                //navigate("/order");
            });
    };


    return (
        <form className="cakeForm">



            <fieldset>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <select
                        // value={order.cakeFlavorsId}
                        onChange={(evt) => {
                            const copy = { ...order };
                            copy.orderItems.quantity = parseInt(evt.target.value);

                            update(copy);
                        }}
                    >
                        <option value="0"></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>

                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="quantity">item:</label>
                    <select
                        // value={order.cakeFlavorsId}
                        onChange={(evt) => {
                            const copy = { ...order };
                            copy.orderItems.itemId = parseInt(evt.target.value);

                            update(copy);
                        }}
                    >
                        <option value="0"></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>

                    </select>
                </div>
            </fieldset>


            

            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="item">pickUpDate:</label>
                    <input
                        required
                        autoFocus
                        type="text"
                        // className="form-control"

                        // value={order.name}
                        // value="monkey"
                        onChange={(evt) => {
                            const copy = { ...order };
                            copy.pickUpDate = evt.target.value;
                            update(copy);
                        }}
                    />
                </div>
            </fieldset> */}
          

            <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Submit Orders
      </button>



 
        </form>
    );
};