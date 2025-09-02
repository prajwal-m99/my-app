import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { CDN_URL } from "../utils/constants";

const RestCard = ({ resData }) => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  if (!resData) return null; // Prevent crash on missing data

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, id } = resData;

  return (
    <div
      data-testid="resCard"
      className="rest-card"
      onClick={() => navigate("/restaurant/" + id)} // ✅ Works now
    >
      <img className="rest-image" alt={name} src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestCard;
