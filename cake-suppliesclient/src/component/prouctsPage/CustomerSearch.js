import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { SearchItemCustomer } from "../../API/SearchAPI";

export const CustomerSearch = () => {
    const [product, setProduct] = useState([])
    const [names, setNames] = useState(null)


    const navigate = useNavigate()



    const GetSearchItems = async (obj) => {
        if (obj === "") {
            let PublicFilesData = await SearchItemCustomer();
            setProduct(PublicFilesData)
            console.log(PublicFilesData);
        } else {
            let SearchedFiles = await SearchItemCustomer(obj)
            setProduct(SearchedFiles)
            console.log(SearchedFiles);

        }
    }



    return (
        <>


            <article className="UserBooksPageContainer">

                <div className="SearchUserBookContainer">
                    <input
                        required
                        autoFocus
                        type="text"
                        className="SearchUserBookBar"
                        // value={searchItems}
                        onChange={e => setProduct(e.target.value)}
                        placeholder="Search by Name Items"
                    />
                    <div className="searchButtonUserBooks" onClick={() => GetSearchItems(names)}>Search</div>
                </div>

                {product.map((item) => {
                    (
                        <section className="UserBooksContainer">
                            <img src={item.imageUrl} alt="item" />
                            <div>Name: {item.name}</div>
                            <div>Category : {item.category}</div>
                            <div>Description : {item.description}</div>
                        </section>
                    );
                })}




            </article>
        </>
    );

}