import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditOrder = () => {

    const [itemOrder, setItemOrder] = useState({
       
        orderId: 0,
        itemId: 0,
        quantity: 0
        });

    const { EditOrderId } = useParams();
    const navigate = useNavigate();


    const localProjectUser = localStorage.getItem("project_user");
    const projectUserObject = JSON.parse(localProjectUser);

    // Display
    console.log(itemOrder);
    useEffect(() => {
        console.log(projectUserObject.id);
        fetch(
            `https://localhost:7005/api/Order/GetOrderByOrderId/${EditOrderId}`)

            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                //setItemOrder(data[0]);
            });
    }, []);

    // const handleSaveButtonClick = (e) => {
    //     e.preventDefault();


    //     //Edit
    //     // https://localhost:7005/api/OrderItems/1


    //     return fetch(`https://localhost:7005/api/OrderItems/${EditOrderId}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(itemOrder),
    //     })
    //         .then((response) => response.json())
    //         .then(() => {
    //             navigate("/order");
    //         });
    // };
    // {itemOrder.name}
    return (
        <form className="cakeForm">

         
            <fieldset>
                <div className="form-group">
                    <label htmlFor="items">Items:</label>
                    <input
                        type="number"
                       // value={itemOrder.itemId}
                        onChange={(evt) => {
                            const copy =  itemOrder ;
                            copy.itemId = evt.target.value;
                            //setItemOrder(copy);
                        }}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="cakeFlavor">quantity:</label>
                    <select
                       // value={itemOrder.itemId}
                        onChange={(evt) => {
                            const copy = itemOrder ;
                            copy.itemId = parseInt(evt.target.value);

                            //setItemOrder(copy);
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
                onClick={(clickEvent) =>
                    <></>
                    //handleSaveButtonClick(clickEvent)
                }

                className="btn btn-primary"
            >
                Edit
            </button>
        </form>
    );
};
