import React, { useEffect, useState } from "react";
import RestCard from "./RestCard";
import { BACKEND_DATA } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch restaurants on mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch(BACKEND_DATA);
      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Search filter
  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  // ⭐ Top Rated filter (example: rating > 4.3)
  const handleTopRated = () => {
    const filtered = listOfRestaurants.filter(
      (res) => res.info.avgRating && res.info.avgRating > 4.3
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <div className="body">
      {/* Search and Filter Section */}
      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="restaurant-list">
        {loading ? (
          <Shimmer /> // ✅ show shimmer while loading
        ) : filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestCard key={restaurant.info.id} resData={restaurant.info} />
          ))
        ) : (
          <p>No restaurants found 🚫</p>
        )}
      </div>
    </div>
  );
};

export default Body;
