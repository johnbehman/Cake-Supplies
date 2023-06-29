
import React from "react";
import { useEffect, useState } from "react"
import "./DecoratingTools.css";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';



export const DecoratingTools = () => {
    const [decoratingTools, setDecoratingTools] = useState([])
    const navigate = useNavigate()


    const localProjectUser = localStorage.getItem("project_user")
    const localUserObject = JSON.parse(localProjectUser)

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`https://localhost:7005/api/Items/GetAllItemsByDecoratingTools`)
                const decoratingToolsArray = await response.json()
                setDecoratingTools(decoratingToolsArray)
            }
            fetchData()

        },
        []
    );

    const handleSaveButtonClick = async (decoratingTools) => {
        const response = await fetch(`https://localhost:7005/api/Order/GetById/${localUserObject.id}`)
        const currentOrder = await response.json()
        const orderToSendAPI = {
            customerId: localUserObject.id,
            pickUpDate: currentOrder[0].pickUpDate,
            orderItems: {
                itemId: decoratingTools.id,
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
            <div className="decoratingTools-background">
                <div className="decorating_h1">
                    <h1>Decorating Tools</h1>
                </div>
                <article className="decorating" >
                    {
                        decoratingTools.map(
                            (decoratingTool) => {


                                return <section className="colorInfo" key={decoratingTool.id} >


                                    <div className="decoratinBox">
                                        <div>

                                            <img className="decoratingImage" src={decoratingTool.imageUrl} alt="AirBrushColors" />

                                            <Button variant="primary" onClick={() => {

                                                handleSaveButtonClick(decoratingTool)
                                            }
                                            }>
                                                <i className="fa fa-cart-plus" aria-hidden="true"></i>Add to</Button>
                                        </div>


                                        <div className="ContainerDetails">
                                            <div className="stylingName">{decoratingTool.name}</div>
                                            {/* <div className="descriptionBox">Description: {decoratingTool.description}</div> */}
                                            {/* <div>Category: {decoratingTool.category}</div> */}
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



// import React from "react";
// import { useEffect, useState } from "react"
// import "./DecoratingTools.css";

// const localProjectUser = localStorage.getItem("project_user");
// const projectUserObject = JSON.parse(localProjectUser);


// export const DecoratingTools = () => {
//     const [decoratingTools, setDecoratingTools] = useState([])

//     useEffect(
//         () => {
//             const fetchData = async () => {
//                 const response = await fetch(`https://localhost:7005/api/Items/GetAllItemsByDecoratingTools`)
//                 const decoratingToolsArray = await response.json()
//                 setDecoratingTools(decoratingToolsArray)
//             }
//             fetchData()

//         },
//         []
//     )


//     return (
//         <>
//             <div className="decoratingTools-background">
//                 <div className="decorating_h1">
//                     <h1>Decorating Tools</h1>
//                 </div>
//                 <article className="decorating" >
//                     {
//                         decoratingTools.map(
//                             (decoratingTools) => {
//                                 return <section key={decoratingTools.id} >
//                                     <div className="decoratinBox">
//                                         <div>
//                                             <img className="decoratingImage" src={decoratingTools.imageUrl} alt="DecoratingTools" />

//                                         </div>
//                                         <div className="ContainerDetails">
//                                             <div className="stylingName">Name: {decoratingTools.name}</div>
//                                             <div className="descriptionBox">Description: {decoratingTools.description}</div>
//                                             <div>Category: {decoratingTools.category}</div>
//                                         </div>
//                                     </div>



//                                 </section>
//                             }
//                         )
//                     }
//                 </article> </div>
//         </>
//     );
// };