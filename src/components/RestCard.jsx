import React from "react";
import { CDN_URL } from "../utils/constants";

const RestCard = ({ resData }) => {
  if (!resData) return null; // ✅ Prevents crash on missing data

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;

  return (
    <div data-testid="resCard" className="rest-card">
      <img
        className="rest-image"
        alt={name}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestCard;
