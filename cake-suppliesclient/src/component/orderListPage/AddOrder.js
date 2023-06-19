import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./AddOrder.css";




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
                navigate("/order");
            });
    };


    return (
        <div className="MainAddingForm">
            <form className="addOrderList">



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
                        <label htmlFor="quantity"> item:</label>
                        <select
                            // value={order.cakeFlavorsId}
                            onChange={(evt) => {
                                const copy = { ...order };
                                copy.orderItems.itemId = parseInt(evt.target.value);

                                update(copy);
                            }}
                        >
                            <option value="0"></option>
                            <option value="1">1: Ivory Amerimist Air Brush Color</option>
                            <option value="2">2: Copper Amerimist Airbrush Color 4.5 oz.</option>
                            <option value="3">3: Lemon Yellow Amerimist Airbrush Color 4.5 oz.</option>
                            <option value="4">4: Green Sheen Amerimist Airbrush Col or 4.5 oz.</option>
                            <option value="5">5: Green Sheen Airbrush Color 4.5 oz</option>
                            <option value="6">6: Lavender Sheen Airbrush Color 4.5  oz</option>
                            <option value="7">7: Silve r Sheen Airbrush Color 4.5oz</option>
                            <option value="8">8: Name: Tall Window Cake Box  - White</option>
                            <option value="9">9: Cupcake Boxes Mockup</option>
                            <option value="10">10: Name: Cupcake Boxes Mockup</option>
                            <option value="10">10: Name: OXO Good Grips Offset Icing Spatula</option>
                            <option value="11">10: Name: KitchenAid Artisan Serie s Stand Mixer</option>
                            <option value="12">10: Name: FONDANT AMOUNTS TO COVER CAKES</option>
                            <option value="13">10: Name: merckens  milk chocolate wafers</option>
                            <option value="14">10: Name: Fondant</option>
                            <option value="15">10: Name: Fondant</option>
                            <option value="16">10: Name: Fondant</option>
                            <option value="17">10: Name: Fondant</option>
                            <option value="18">10: Name: Fondan t</option>
                            <option value="19">10: Name: Candy</option>
                            <option value="20">10: Name: Round Table</option>
                            <option value="21">10: Name: Decorating Tool Set</option>
                            <option value="22">10: Name: cake decorat ing tool set</option>
                            <option value="23">10: Name: Cake Nozzle</option>





                        </select>
                    </div>
                </fieldset>

                {/* { Category: "coloring", Name:  "Ivory Amerimist Air Brush Color"}, 
    { Category: "coloring", Name: "Copper Amerimist Airbrush Color 4.5 oz."}, 
    { Category: "coloring", Name: "Lemon Yellow Amerimist Airbrush Color 4.5 oz. "},
    { Category: "coloring", Name: "Green Sheen Amerimist Airbrush Col or 4.5 oz."},
    { Category: "coloring", Name: "Green Sheen Airbrush Color 4.5 oz"}, 
    { Category: "coloring", Name: "Lavender Sheen Airbrush Color 4.5  oz"},
    { Category: "coloring",Name:" Silve r Sheen Airbrush Color 4.5oz"} ,
    { Category: "BakingSupplies", Name: "Tall Window Cake Box  - White"},
    { Category: "BakingSupplies", Name: "Cupcake Boxes Mockup"}, 
    { Category: "BakingSupplies", Name: "OXO Good Grips Offset Icing Spatula"}, 
    { Category: "BakingSup plies ",Name:"KitchenAid Artisan Serie s Stand Mixer"},
    { Category: "Edibles", Name: "FONDANT AMOUNTS TO COVER CAKES" },
    { Category: "Edibles", Name: "merckens  milk chocolate wafers"},
    { Category: "Edibles", Name: "Fondant" },
    { Category: "Edibles", Name: "Fondant" },
    { Category: "Edibles", Name: "Fondant" },
    { Category: "Edibles", Name: "Fondant" },
    { Category: "Edibles", Name: "Fondan t"},
    { Category: "Edibles",Name:"Ca ndy"} , 
    { Category: "DecoratingTools", Name: "Round Table"}, 
    { Category: "DecoratingTools", Name: "Fondant Rolling"}, 
    { Category: "DecoratingTools", Name: "Decorating Tool Set"}, 
    { Category: "DecoratingTools", Name: "cake decorat ing tool set"},
      {Category:"DecoratingTools",Name:"Cake Nozzle"}, */}


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
        </div>
    );
};