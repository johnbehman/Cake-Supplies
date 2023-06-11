import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";


export const SearchItems = ({ searchClicked }) => {
    const [searchItems, setSearchItems] = useState(null)


    return (
        <div className="SearchUserBookContainer">
            <input
                required
                autoFocus
                type="text"
                className="SearchItems"
                value={searchItems}
                onChange={e => setSearchItems(e.target.value)}
                placeholder="Search by Name Items"
            />
            <div className="searchButton" onClick={() => searchClicked(searchItems)}>Search</div>
        </div>
    )

}