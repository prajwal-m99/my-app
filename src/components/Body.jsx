import React from "react";
import { BACKEND_DATA } from "../utils/constants"
import RestCard from "./RestCard";


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" className="search-box" placeholder="Search for restaurants and food" />
                <button className="search-btn">Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => { }}>Top Rated Restuarants</button>
            </div>
            <div className="rest-container">
                {fetchData.map((restaurant) => (
                    <restuarantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
}

const fetchData = async () => {
  }




export default Body;