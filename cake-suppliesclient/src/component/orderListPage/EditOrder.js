// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export const EditOrder = () => {

//     const [itemOrder, setItemOrder] = useState({
//         id:0,
//         orderId: 0,
//         itemId: 0,
//         quantity: 0
//     });
    
    
    
//     const { id } = useParams();
//     const navigate = useNavigate();


//     const localProjectUser = localStorage.getItem("project_user");
//     const projectUserObject = JSON.parse(localProjectUser);

    
//     useEffect(() => {
//         fetch(
//             `https://localhost:7005/api/OrderItems/${id}`
            
            
//             )
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data)
//                 setItemOrder(data);
//             });
//     }, []);

//     const handleSaveButtonClick = (e) => {
//         e.preventDefault();


//         //Edit
//         // https://localhost:7005/api/OrderItems/1
//         //https://localhost:7005/api/OrderItems/68

//         return fetch(`https://localhost:7005/api/OrderItems/${id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(itemOrder),
//         })
//             .then(() => {
//                 navigate("/order");
//             });
//     };

//     //{itemOrder.name}
//     return (
//         <form className="cakeForm">



//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="quantity">Quantity:</label>
//                     <select
//                         value={itemOrder.quantity}
//                         onChange={(evt) => {
//                             const copy = itemOrder;
//                             copy.quantity = parseInt(evt.target.value);
//                             console.log("Copy: ", copy);

//                             //setItemOrder(copy);
//                         }}
//                     >
//                         <option value="0"></option>
//                         <option value="1" >1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                         <option value="6">6</option>
//                     </select>
//                 </div>
//             </fieldset>


//             <button
//                 onClick={(clickEvent) => {

//                     handleSaveButtonClick(clickEvent)
//                 }
//                 }

//                 className="btn btn-primary"
//             >
//                 Edit
//             </button>
//         </form>
//     );
// };
