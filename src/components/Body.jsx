import React, { useEffect, useState } from "react";
import RestCard from "./RestCard";
import { BACKEND_DATA } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Fetch restaurants on mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(BACKEND_DATA);
      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  // 🔍 Search filter
  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  // ⭐ New: Top Rated filter (example: rating > 4.3)
  const handleTopRated = () => {
    const filtered = listOfRestaurants.filter(
      (res) => res.info.avgRating && res.info.avgRating > 4.3
    );
    setFilteredRestaurants(filtered);
  };

 
};

export default Body;
